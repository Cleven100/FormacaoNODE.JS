const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/:nome/:lang", (require, response) => {
    var nome = require.params.nome;
    var lang = require.params.lang;
    var exibirMensagem = false;
    response.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMensagem
    });
});

app.listen(8080,()=>{
    console.log("APP rodando *---* !!!");
})

