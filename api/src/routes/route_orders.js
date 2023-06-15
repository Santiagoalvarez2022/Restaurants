const { handler_createOrder,handler_getOrders} = require("../handlers/handler_orders");
const { Router } = require("express");
const router_orders = Router()


router_orders.post("/", handler_createOrder)
router_orders.get("/", handler_getOrders)


module.exports = router_orders