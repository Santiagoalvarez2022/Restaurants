//importo los controllers
const {create_menu, get_menus } = require("../controllers/createMenu")


const handler_postMenu = async(req,res) =>{

    const data = req.body

    try {
        
        const result = await create_menu(data)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json({error:error.message}) 
    }

}
const handler_getMenus = async(req,res) =>{
    try {
        const result = await get_menus()
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json({error:error.message}) 
    }

 }
module.exports = {
    handler_postMenu,
    handler_getMenus
}