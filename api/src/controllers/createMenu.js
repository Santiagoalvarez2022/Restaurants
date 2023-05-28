const{Menus} = require("../db")

const create_menu = async(data) =>{
    const {ingredients, name,price} = data;
    //evaluo si fue creado si no creo el nuevo menu 
    return result = await Menus.findOrCreate({
        where:{name},
        defaults:{
            name,
            ingredients,
            price
        }
    })
   
} 

const get_menus = async() =>{ 
    return result = await Menus.findAll({})
}




module.exports = {
    create_menu,
    get_menus
}