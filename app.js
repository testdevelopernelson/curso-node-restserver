require('dotenv').config();
const Server = require('./models/server');

const server = new Server();
console.log('archivo app');
server.listen();

