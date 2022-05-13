const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');
const perguntaModel = require('./database/Pergunta')

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
  response.render("index");
});

app.get("/question", (require, response) => {
    response.render("perguntar");
})

app.post("/saveQuestion",(require, response) => {
  let title = require.body.title;
  let description = require.body.description;
  
  response.send(`Formulário recebido com sucess ${title} ${description}`);
})

app.listen(8080, () => {
  console.log("APP rodando *---* !!!");
});
