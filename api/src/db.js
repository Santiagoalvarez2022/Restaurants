//aca debo levantar el servidor 


const fs = require("fs");
const path = require("path");
const {Sequelize, DataTypes} = require("sequelize")

//coneccion a la bd
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/restaurants', 
{
  dialect: "postgres",
  logging: false,
  native: false,
}) 
async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Conexión exitosa a la base de datos.');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  }
  
  testConnection();
//crear las tablas


/* contenedor de los archivos contenidos en la carpeta models */
const modelDefiners = [];
/* hace una diferencia de index.js (no seria necesaria en nuestro caso, pero no esta mal ponerlo) */
const basename = path.basename(__filename);

/* agregamos cada uno de los archivos a un array "modelDefiners" */
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
/* le pasamos por params a cada uno de los modelos definidos en la carpeta models "sequelize" */

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);



const {Tables, Orders, Menus} = sequelize.models


Tables.hasOne(Orders);
Orders.hasMany(Menus)
  





module.exports = {

    //exporto la connecion de sequelize que es "sequelize"
    conn: sequelize,
    //exporto los modelos para los controllers
    ...sequelize.models
}