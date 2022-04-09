const express = require("express");
const app = express();


app.get("/", function(require, response){
    response.send("Bem vindo a formação NODE");
   });

app.get("/blog", function(require, response){
    response.send("Bem vindo ao meu blog");
});

app.get("/canal/youtube", function(require, response){
    response.send("Bem vindo ao meu Canal");
});
   

app.listen(4000, function(erro){
  if(erro){
      console.log("Ocorreu um erro!!");
  } else {
      console.log("Servidor iniciado com sucesso");
  }
})