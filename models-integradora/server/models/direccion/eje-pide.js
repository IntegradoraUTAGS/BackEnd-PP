const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let ejeSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, "Por favor ingrese el eje pide"]
    }

});

module.exports = mongoose.model('Eje-pide', ejeSchema);