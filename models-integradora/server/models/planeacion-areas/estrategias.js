const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let estrategiasSchema = new Schema({
    actividades: {
        type: Array,
        required: [true, 'Por favor regisre actividades o acciones']
    },
    indicador: {
        type: String,
        required: [true, 'Ingrese un indicador para las estrategias']
    },
    meta: {
        required: [true, 'Es necessario que ingrese una meta']
    }
});