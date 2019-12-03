const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MateriasModel = new Schema({
    nombre: { type: String, required: false },
    clave: { type: String, required: false },
    maestro: { type: String, required: false },
    semestre: { type: Number, required: false }
}, { collection: 'escuela' });

module.exports = mongoose.model('Materias', MateriasModel);