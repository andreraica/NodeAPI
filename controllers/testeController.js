module.exports = function(app){

  //GET
  app.get('/test', function(req, res){
    console.log("get req.");

    //Promisse Test
    p1().then(msg => p2(res, msg));

  });

  function p1 ()
  {
    return new Promise(
      function(resolve, reject){
          setTimeout(function(){
            var msg = 'Get Success AA ' + Math.random() * 1000;
            resolve(msg);
          }, 1000);
      })
  }

  function p2 (res, msgP1){
    new Promise(
      function(resolve, reject){
          setTimeout(function(){
            var msgFinal = msgP1 + ' Get Success BB ' + Math.random() * 1000;
            res.send(msgFinal);
            resolve();
          }, 3000);
      })
  }


  //POST
  app.post('/test', function(req, res){

    req.assert("nome", "Name Required.").notEmpty();
    //req.assert("valor", "Value Required and must be decimal.").notEmpty().isFloat();
    //req.assert("moeda", "Currency Required and must have 3 words at least").notEmpty().len(3,3);

    var errors = req.validationErrors();

    if (errors){
      console.log("Validation errors found");
      res.status(400).send(errors);
      return;
    }

    var jsonBody = req.body;
    console.log("post: " + jsonBody);

    jsonBody.Situacao = "Added";

    res.status(200).json(jsonBody);
  });
}
