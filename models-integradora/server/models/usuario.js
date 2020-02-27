const mongoose = require('mongoose');
const uniqueValidator =

    require('mongoose-unique-validator');

//declarar esquema
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del usuario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el email']
    },
    password: {
        type: String,
        required: [true, 'Por favor ingresa la contraseña']
    },
    direccion: {
        type: String,
        required: [true, 'Ingrese una direccion']
    },
    estado: {
        type: Boolean,
        default: true
    },
    img: {
        type: String,
        default: "img.jpg"
    }
});
//el esquema utilize el plugin
usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser único y diferente'
});

//crea una coleccion
module.exports = mongoose.model('Usuario', usuarioSchema);