const { handler_createOrder} = require("../handlers/handler_orders");
const { Router } = require("express");
const router_orders = Router()
console.log("estoy en la ruta");
router_orders.post("/", handler_createOrder)


module.exports = router_orders