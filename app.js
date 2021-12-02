const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const encuesta =require('./routes/encuesta')

//const en= require('./routes/encuesta')

//Conectar a la Base de Datos
mongoose.connect('mongodb://localhost:27017/sistemaencuesta', {useNewUrlParser: true, useUnifiedTopoLogy:true})
.then(()=>console.log('Conectado a MogoDB'))
.catch(err=>console.log('No se pudo conectar a MongoDB', err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/encuesta',encuesta);

app.listen(port, () => {
  console.log(`Api Rest: http://localhost:${port}`)
})
