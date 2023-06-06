const { Schema, model } = require('mongoose');

const catalogSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    precio: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    SO: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});

const catalogmodels = model('tablets', catalogSchema);
module.exports = catalogmodels;
