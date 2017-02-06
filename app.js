//var app = require('./config/custom-express')();

//app.listen(3000, function(){
//  console.log('Servidor rodando na porta 3000.');
//});

var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');

}).listen(process.env.PORT || 8080);
