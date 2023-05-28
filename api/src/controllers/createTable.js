const {Tables} = require("../db")


const createTable = async() =>{

    return await Tables.create({})
}

const getTables = async() =>{
    return await Tables.findAll()
    
}

module.exports = {
    createTable,
    getTables
}