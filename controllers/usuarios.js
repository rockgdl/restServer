const { response,request } = require('express');

const usuariosGet = (req=request, res=response)=> {
    const params= req.query;
    res.json({
        "ok":true,
        "msg":"get API - controlador",
        params
    })
  }

const usuariosPost =  (req, res=response)=> {
  const {nombre, edad} = req.body;

    res.json({

        "msg":"post API- controller ",
        nombre,
        edad
    })
  }

const usuariosPut =  (req, res=response)=> {

    const id= req.params.id;
    res.status(500).json({
        "ok":true,
        "msg":"put API -controller ",
        id
    })
  }
const usuariosPatch=  (req, res=response)=> {
    res.json({
       
        "msg":"patch API- controller "
    })
  }
const usuariosDelete= (req, res=response)=> {
    const id= req.params.id;
    res.json({
       
        "msg":"delete API",
        id
    })
  }

  module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut,
  }