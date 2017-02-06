//Local
//var app = require('./config/custom-express')();
//app.listen(3000, function(){
//  console.log('Servidor rodando na porta 3000.');
//});

var app = require('./config/custom-express')();
var server = require('http').createServer(app);

server.listen(8080, function(){
  console.log('Servidor rodando na porta 8080.');
});

//Padrão Azure
//var http = require('http');

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.end('Hello, world!');
//}).listen(process.env.PORT || 8080);
