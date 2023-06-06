const catalogmodels = require('../models/catalog.models');

// GET ( obtener )
/*
const getCatalog = async (req, res) => {

    const tablets = await catalogmodels.find(); // find = obtener todo

    res
        .status(200) // 200 = OK
        .json({
            tablets: tablets
        })
        .send()

}
*/
const getCatalog = async (req, res) => {
    try{
    const tablets = await catalogmodels.find(); // find = obtener todo

    res
        .status(200) // 200 = OK
        .json({
            tablets: tablets
        })
        .send()
    }catch(error){
        console.log(error);

        res
        .status(500) 
        .send()
    }
}

// POST ( crear )
const createCatalog = async (req, res) => {
    const { nombre, precio, marca, SO, imagen } = req.body;
    const catalog = new catalogmodels({
        nombre: nombre,
        precio: precio,
        marca: marca, 
        SO: SO,
        imagen: imagen
    })

    await catalog.save()

    res
        .status(201) // 201 = Create
        .json({
            message: 'Artículo añadido'
        })
        .send()

}

// PUT ( actualizar )
const catalogUpdate = async (req, res) => {

    const { id } = req.params;
    const { nombre, precio, marca, SO, imagen } = req.body;

    await catalogmodels.findByIdAndUpdate(id, {
        nombre: nombre,
        precio: precio,
        marca: marca, 
        SO: SO,
        imagen: imagen
    });

    res
        .status(200)
        .json({
            message: 'Actualizado correctamente'
        })
        .send()

}

// DELETE ( eliminar )
const catalogDelete = async (req, res) => {

    const { id } = req.params;

    await catalogmodels.findByIdAndDelete(id);

    res
        .status(200)
        .json({
            message: 'Eliminado correctamente'
        })
        .send()

}

module.exports = {
    getCatalog,
    createCatalog,
    catalogDelete,
    catalogUpdate
}