var app = require('./config/custom-express')();

app.listen(80, function(){
  console.log('Servidor rodando na porta 80.');
});
