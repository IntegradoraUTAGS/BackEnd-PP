const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let unidadEjecSchema = new Schema({
    codigo: {
        required: [true, 'Se necesita el codigo de la unidad ejecutora']
    },
    descripcion: {
        type: String,
        required: [true, 'Es obligatoria una unidad ejecutora']
    }
});

module.exports = mongoose.model('UnidadEjec', unidadEjecSchema);