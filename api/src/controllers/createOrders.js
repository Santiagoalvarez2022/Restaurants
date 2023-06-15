const {Orders, Menus,Orders_Menus } = require("../db")


/*cadad mesa va a tener Una order va a tener
    id de la mesa 
    id´s de los menus con comentarios



*/ 
const create_orders = async (data) => {
    // {n_table: 6, food: [ [ 'e5a8b5a6-31d3-42f5-8c41-938b463dae64', 2 ] ] }
    //desestucturo el numero de la mesa y el pedido de la comida
    const {n_table, food} = data;
    //declaro la fecha actual para luego poder separar los pedidos del dias o una fecha especifica
    const date = new Date().toLocaleDateString();
    //creo la nueva orden 
    const newOrder  = await Orders.create({n_table:n_table,date });
    //recorro cada arrray del array del pedido 
    food.forEach(async (array) =>{
        //busco por el id el menu que se escogio
        let menuBuscado = await Menus.findByPk(array[0]);
        //adiciono a la orden creada el menu 
        newOrder.addMenus(menuBuscado)
        .then(async()=>{
            let OrderId = newOrder.id;
            let MenuId = array[0];
            //busco en la tabla intermedia la orden y el menu para añadirle la cantidad
            await Orders_Menus.update({ cantidad: array[1] }, {
                where: {
                  OrderId,
                  MenuId
                }
              });
                
        })

    }) 
    return newOrder; 

}


const get_orders = async () =>{
    //establezco la fecha actual 
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();

    //hago la peticion de los pedidos del dia de hoy con un estado no entregado = false
    const result = await Orders.findAll({
        where :{ date , state: false},
        attributes : ['n_table','state'],
        include : {
            model : Menus,
            attributes : ['name','ingredients'],
        } 
    });
   
    
    //retorno un array nuevo, que contiene un objeto con { n de mesa, estado y un array de las comidas pedidas(con la cantidad de platos)}
    return result.map(order =>{
        //desesctructuro el n de mesa y el estado
        const {n_table, state} = order; 

        //mapeo para deppurar el array Menu que vien de la base de dato y solo envio los datos que necesito
        const menu = order.Menus.map((menu)=> {
        return {
            name : menu.name,
            ingredients : menu.ingredients,
            cantidad : menu.Orders_Menus.cantidad
            };
        })

        //retorno un obj al array nuevo
        return {n_table,state, menu }
    })

}

module.exports = {
    create_orders,
    get_orders
}

/*[
  {
    "n_table": 7,
    "state": false,
    "Menus": [
      {
        "name": "Milanesa c/ Pure",
        "ingredients": "Milanesa de carne/pollo pure de papas o mixto ",
        "Orders_Menus": {
          "id": 1,
          "cantidad": 1,
          "OrderId": 2,
          "MenuId": "eabefc8c-a623-4360-be18-751fb8f304e1"
        }
      },
      {
        "name": "Guisado",
        "ingredients": "Arros, papas, morrron, pure de tomate, ...",
        "Orders_Menus": {
          "id": 2,
          "cantidad": 2,
          "OrderId": 2,
          "MenuId": "39957e90-432e-4a0b-bd1e-f60e6a03ffcf"
        }
      }
    ]
  }
] */