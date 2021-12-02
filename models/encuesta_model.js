<<<<<<< HEAD
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
=======
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
>>>>>>> 01d355651547b8d1ebb5940c99ba804b53e0d730
