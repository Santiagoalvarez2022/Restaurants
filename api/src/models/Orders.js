const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Orders', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    n_table: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date : {
      type : DataTypes.STRING,
      allowNull: false,

    },
    state : {
      type : DataTypes.BOOLEAN,
      defaultValue : false

    }

  },
  {timestamps: false}//elimina las propiedades de fecha de creacion y de modificacion
  );
};
