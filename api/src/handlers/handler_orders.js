//traigo los controllers

const {create_orders,get_orders} = require("../controllers/createOrders")

//handler de orders

handler_createOrder = async (req,res)=>{
    const data = req.body
    
    console.log("esoy en el hanlder ", data);
    try {
        let result =  await create_orders(data)
        console.log("despues del controller",result);
        res.status(200).json(result)
    } catch (error) {


        res.status(400).json({error : error.messages})
        
    }
}

module.exports = {
    handler_createOrder
}