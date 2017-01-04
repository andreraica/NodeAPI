module.exports = function(app){
  app.get('/teste', function(req, res){
    console.log("get req.");
    res.send('Get Sucesso');
  });
}
