const { Router } = require('express')
const router_orders = require("./route_orders")
const router_menus  = require("./route_menus");
const router_tables = require('./route_tables');

const router = Router()
console.log("esoy en el idex router", router_orders);

router.use("/orders",router_orders )
router.use("/menus", router_menus)
router.use("/tables", router_tables)

module.exports = router