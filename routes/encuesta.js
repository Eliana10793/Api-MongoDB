<<<<<<< HEAD
const express = require('express');
const Encuesta=require('../models/encuesta_model');

const ruta = express.Router();

ruta.get('/', (req, res)=>{
    let resultado=listarencuesta();
    resultado.then(encuesta =>{
        res.json(encuesta)
    }).catch(err=>{
        res.status(400).json({
            error:err
        })
    })
});


async function listarencuesta(){
    let encuesta=await Encuesta.find();
    return encuesta;
}
=======
const express = require('express');
const Encuesta=require('../models/encuesta_model');

const ruta = express.Router();

ruta.get('/', (req, res)=>{
    let resultado=listarencuesta();
    resultado.then(encuesta =>{
        res.json(encuesta)
    }).catch(err=>{
        res.status(400).json({
            error:err
        })
    })
});


async function listarencuesta(){
    let encuesta=await Encuesta.find();
    return encuesta;
}
>>>>>>> 01d355651547b8d1ebb5940c99ba804b53e0d730
module.exports=ruta;