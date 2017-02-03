var app = require('./config/custom-express')();

app.listen(8000, function(){
  console.log('Servidor rodando na porta 3000.');
});
