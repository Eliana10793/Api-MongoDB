const mongoose = require("mongoose");

const encuestaSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  estado: String,
  fechacreacion: Date,
  fechainicio: Date,
  fechafin: Date,
  Secciones: [{
    titulo: String,
    descripcion: String,
    TipoPregunta: [{
      nombre: String,
      pregunta: [{
        titulo: String,
        respuesta: [{
          trespuesta: String,
        }],
      }],
    }],
  }],
});

module.exports = mongoose.model("Encuesta", encuestaSchema);
