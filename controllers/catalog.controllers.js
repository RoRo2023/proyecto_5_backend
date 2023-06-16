const catalogmodels = require('../models/catalog.models');

// GET ( obtener )

const getCatalog = async (req, res) => {
    try{
    const videojuegos = await catalogmodels.find(); // find = obtener todo
    return res
        .status(200) // 200 = OK
        .json({
            catalogo: videojuegos
        })
        //.send()
    }catch(error){
        console.log(error);
        return res
        .status(500) 
        //.send()
    }
}

const getCatalogID = async (req, res) => {
    try{
    const { id } = req.params;

    const catalogo = await catalogmodels.findById(id);

    return res
        .status(200)
        .json({
            catalogo: catalogo
        })
        //.send()
    }catch(error){
        console.log(error);
        return res
        .status(500) 
        //.send()
    }
}

module.exports = {
    getCatalog,
    getCatalogID
}