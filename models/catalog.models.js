const { Schema, model } = require('mongoose');


const catalogSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: true
    },
    clasificacion: {
        type: String,
        required: true
    },
    consola: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});

const catalogmodels = model('videojuegos', catalogSchema);
module.exports = catalogmodels;

/*
const catalogSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: true
    },
    clasificacion: {
        type: String,
        required: true
    },
    consola: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});

const catalogmodels = model('catalogo', catalogSchema);
module.exports = catalogmodels;
*/