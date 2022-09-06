const express = require('express')
var cors = require('cors');


class Server {


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath='/api/usuarios';

        //middleware
        this.middelwares();
        //rutas de mi applicacion
        this.routes();
    }

    middelwares(){

        this.app.use(cors());

        //Lectura y Parseo del body
        this.app.use(express.json());
        //directorio PUBLICO
        this.app.use(express.static('public'));
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
listen(){
    this.app.listen(this.port,()=>{
        console.log("servidor corriendo en el puerto ",this.port); 
    })
}

}
module.exports=Server;