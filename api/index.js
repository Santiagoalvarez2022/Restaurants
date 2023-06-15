const PORT = 3001;
const {conn, Tables,Menus,Orders} = require("./src/db") 
//importo el servidor " app " como "server" 
const server = require("./src/app")


//fake 
let menu1 = {name : "Milanesa c/ Pure", ingredients : "Milanesa de carne/pollo pure de papas o mixto ", price: 800};

let menu2 = {name : "Guisado", ingredients : "Arros, papas, morrron, pure de tomate, ...", price: 850};

let menu3 = {name : "Pizza especial", ingredients : "Tomate, Muzzarella, morron, aceituna, Oregano, Cebolla", price: 700};



conn.sync({force:true}).then(()=>{
  server.listen(PORT,()=>{
    console.log("http://localhost:3001");
    console.log('%s listening at',PORT); // eslint-disable-line no-console

  })
})
.then( async ()=>{
  let count = 0;
  while (count < 10) {
    await Tables.create({});
    count++;
  }


  await Menus.create({name:menu1.name, ingredients:menu1.ingredients,price:menu1.price});

  await Menus.create({name:menu2.name, ingredients:menu2.ingredients,price:menu2.price});
  
  await Menus.create({name:menu3.name, ingredients:menu3.ingredients,price:menu3.price});
  await Orders.create({n_table:1, date:"7/09/2002"})
})


 