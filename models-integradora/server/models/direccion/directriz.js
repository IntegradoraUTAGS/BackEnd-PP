const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let directrizSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'Es obligatorio que se registre una directriz']
    }
});

module.exports = mongoose.model('Directriz', directrizSchema);