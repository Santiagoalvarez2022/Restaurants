

const {Router} = require("express")
const router_menus = Router()
const {handler_postMenu, handler_getMenus } = require("../handlers/handler_menus")

router_menus.post("/", handler_postMenu)
router_menus.get("/", handler_getMenus)

module.exports = router_menus