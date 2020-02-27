const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let prograpaPreSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'Es obligatorio registrar un programa presupuestario para el anio vigente']
    }
});