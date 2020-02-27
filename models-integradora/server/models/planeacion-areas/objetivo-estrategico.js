const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let objEstratSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'Se necesita un objetivo estrategico']
    },
    indicador: {
        required: [true, 'Indicador obligatorio para el sistema']
    },
    meta: {
        required: [true, 'Es obligatoria una meta']
    }
});

module.exports = mongoose.model('Objetivo-Estrategico', objEstratSchema);