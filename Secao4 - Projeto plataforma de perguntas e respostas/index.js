const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta')

//DataBase

connection
  .authenticate()
  .then(() => {
    console.log("Conexão banco dados")
  })
  .catch((error) => {
    console.log(error);
  })

app.set("view engine", "ejs");
app.use(express.static("public"));

//bodyParse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//rotas
app.get("/", (require, response) => {
  Pergunta.findAll({ raw: true, order:[
    ['id','DESC']
  ]}).then(perguntas =>{
    response.render("index",{
      perguntas: perguntas
    });
  })
  
});

app.get("/question", (require, response) => {
    response.render("perguntar");
})

app.post("/saveQuestion",(require, response) => {

  let title = require.body.title;
  let description = require.body.description;
  
  Pergunta.create({
    titulo: title,
    descricao: description
  }).then(() => {
    response.redirect("/");
  })
})

app.get("/question/:id", (require, response) => {
  let id = require.params.id;
  Pergunta.findOne({
    where: {
      id:id
    }
  }).then(pergunta => {
    if(pergunta != undefined){
         
      Resposta.findAll({
        where: {perguntaId: pergunta.id},
        order: [
          ['id','DESC']
        ]
      }).then(respostas => {
         response.render("pergunta",{
                 pergunta:pergunta,
                 respostas : respostas
            });
      })
           
           
    } else {
       response.redirect("/");
    }
  })
});

app.post("/responder", (require,response) => {
  let body = require.body.corpo;
  let perguntaId = require.body.pergunta;

  Resposta.create({
    body: body,
    perguntaId: perguntaId
  }).then(() => {
       response.redirect("/question/" + perguntaId);
  }); 
});

app.listen(8080, () => {
  console.log("APP rodando *---* !!!");
});
