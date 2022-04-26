const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/:nome/:lang", (require, response) => {
    var nome = require.params.nome;
    var lang = require.params.lang;
    var exibirMensagem = false;

    var products =[
        {nome: "Doritos", preco: 3.14},
        {nome: "Fandangos", preco: 2.00},
        {nome: "coca-cola", preco: 3.00},
        {nome: "Leite Elege", preco: 4.99},
        {nome: "Manteiga", preco: 5.99}
    ]

    response.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMensagem,
        products: products
    });
});

app.listen(8080,()=>{
    console.log("APP rodando *---* !!!");
})

