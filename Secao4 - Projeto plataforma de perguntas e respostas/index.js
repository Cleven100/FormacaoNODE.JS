const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/", (require, response) => {
    response.render("principal/perfil");
});

app.listen(8080,()=>{
    console.log("APP rodando *---* !!!");
})

