const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (require, response) => {
  response.render("index");
});

app.get("/perguntar", (require, response) => {
    response.render("perguntar");
})

app.listen(8080, () => {
  console.log("APP rodando *---* !!!");
});
