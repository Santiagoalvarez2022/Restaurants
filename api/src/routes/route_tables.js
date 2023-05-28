

const {Router} = require("express")
const router_tables = Router()
const {handler_getTable,handler_postTable} = require("../handlers/handler_table")

router_tables.post("/", handler_postTable)
router_tables.get("/", handler_getTable)

module.exports = router_tables