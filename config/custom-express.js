var express = require('express');
var expressValidator = require('express-validator');

var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
  var app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  //Obrigatoriamente logo apos o bodyParser
  app.use(expressValidator()); 

  app.use(function (req, res, next) {
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
      res.header('Expires', '-1');
      res.header('Pragma', 'no-cache');
      next()
  });

  consign()
   .include('controllers')
   .into(app);

  return app;
}
