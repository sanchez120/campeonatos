const mongoose = require('mongoose');

const campeonatoSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    fecha_comienzo: { type: Date, required: true },
    numero_dias: { type: Number, required: true },
    costo_inscripcion: { type: Number, required: true },
    max_jugadores: { type: Number, required: true },
    ciudad: { type: String, required: true },
});

module.exports = mongoose.model('Campeonato', campeonatoSchema);s