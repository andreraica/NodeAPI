module.exports = function(app){
  app.get('/teste', function(req, res){
    console.log("get req.");
    res.send('Get Sucesso');
  });

  app.post('/teste', function(req, res){

    var obj = req.body;
    console.log("post: " + obj);
    res.send('Post Sucesso');
  });
}
