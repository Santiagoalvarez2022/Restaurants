//importo los controllers
const { createTable, getTables} = require("../controllers/createTable")


const handler_postTable = async(req,res) =>{

    const data = req.body

    try {
        
        const result = await createTable(data)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json({error:error.message}) 
    }

}
const handler_getTable= async(req,res) =>{
    try {
        const result = await getTables()
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json({error:error.message}) 
    }

 }
module.exports = {
    handler_getTable,
    handler_postTable
}