//Local
var app = require('./config/custom-express')();
app.listen(process.env.PORT || 3000, function(){
  console.log('Servidor rodando na porta. server<<' + process.env.PORT + '>> ou local<<3000>>');
});



//var app = require('express')();
//var server = require('http').createServer(app);
//server.listen(process.env.PORT || 8080, function(){
//  console.log('Servidor rodando na porta 8080.');
//});




//Padrão Azure
//var http = require('http');

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.end('Hello, world!');
//}).listen(process.env.PORT || 8080);
