const express = require('express');
const cors = require('cors');

class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';
        //Middlewares
        this.middlewares();

        //Rutas de la apliación
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Lectura y parseo Body
        this.app.use( express.json() );

        //Directorio público
        this.app.use( express.static('public'));
    }

    routes(){
        
        this.app.use( this.usuariosRoutePath,  require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;