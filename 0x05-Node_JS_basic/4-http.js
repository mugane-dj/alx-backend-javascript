// Create a small HTTP server using the http module
const http = require('http');

const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);

module.exports = app;
