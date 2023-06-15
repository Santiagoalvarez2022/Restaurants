//traigo los controllers

const {create_orders,get_orders} = require("../controllers/createOrders")

//handler de orders

handler_createOrder = async (req,res)=>{
    const data = req.body
    try {
        let result =  await create_orders(data)
        
        res.status(200).json(result)
    } catch (error) {


        res.status(400).json({error : error.messages})
        
    }
}

handler_getOrders = async (req,res)=>{
    try {
        let result =  await get_orders()
        
        res.status(200).json(result)
    } catch (error) {


        res.status(400).json({error : error.messages})
        
    }
}


module.exports = {
    handler_createOrder,
    handler_getOrders
}