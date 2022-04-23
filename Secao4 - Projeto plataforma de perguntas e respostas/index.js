const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/", (require, response) => {
    response.send("Bem vindo ao meu site! *-*");
});

app.listen(8080,()=>{
    console.log("APP rodando *---* !!!");
})

