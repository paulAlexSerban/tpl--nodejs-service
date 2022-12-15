const http = require('http');
const routes = require('./routes');


// set communication endpoint
const PORT = process.env.NODE_PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const server = http.createServer(routes);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Listen to requests on port http://${HOSTNAME}:${PORT}`)
});
