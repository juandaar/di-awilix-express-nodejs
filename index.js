require('dotenv').config();
const {container,setup} = require('./di-setup');
setup();
const server = container.resolve('server');

server.run();