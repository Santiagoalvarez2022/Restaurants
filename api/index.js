const PORT = 3001;
const {conn} = require("./src/db") 
//importo el servidor " app " como "server" 
const server = require("./src/app")

conn.sync({force:true}).then(()=>{
  server.listen(PORT,()=>{
    console.log("http://localhost:3001");
    console.log('%s listening at',PORT); // eslint-disable-line no-console

  })
})


