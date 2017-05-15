module.exports = function(app){

  //GET
  app.get('/teste', function(req, res){
    console.log("get req.");

    //Promise 1
    var p1 = new Promise(
      function(resolve, reject){
          setTimeout(function(){
            resolve('Get SucessoAA ' + Math.random() * 1000);
          }, 10000);
      }
    )

    // var p2 = new Promise(
    //   function(resolve, reject){
    //       setTimeout(function(){
    //         resolve('Get SucessoBB ' + Math.random() * 1000);
    //       }, 1000);
    //   }
    // )

    //Promisse Test
    p1.then(
      function(p1Param){
        res.send(p1Param);
      }
    )

  });


  //POST
  app.post('/teste', function(req, res){

    req.assert("nome", "Nome é obrigatória.").notEmpty();
    //req.assert("valor", "Valor é obrigatório e deve ser um decimal.").notEmpty().isFloat();
    //req.assert("moeda", "Moeda é obrigatória e deve ter 3 caracteres").notEmpty().len(3,3);

    var errors = req.validationErrors();

    if (errors){
      console.log("Erros de validação encontrados");
      res.status(400).send(errors);
      return;
    }

    var jsonBody = req.body;
    console.log("post: " + jsonBody);

    jsonBody.Situacao = "Incluido";

    res.status(200).json(jsonBody);
  });
}
