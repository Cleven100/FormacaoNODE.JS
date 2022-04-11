const express = require("express");
const app = express();


app.get("/", function(require, response){
    response.send("<h1>Bem vindo a teste formação NODE<h1>");
   });

app.get("/blog/:artigo?", function(require, response){
    var artigo = require.params.artigo;
    if(artigo){
     response.send("Bem vindo ao meu blog");
    } else {
       response.send("Voce não está autorizado");
    }
    
});

app.get("/canal/youtube", function(require, response){
    response.send("Bem vindo ao meu Canal");
});
 
app.get("/ola/:nome", function(require,response){
    let nome = require.params.nome;
    response.send("<h1>Oi " + nome + " </h1>");
});


app.listen(4000, function(erro){
  if(erro){
      console.log("Ocorreu um erro!!");
  } else {
      console.log("Servidor iniciado com sucesso");
  }
})