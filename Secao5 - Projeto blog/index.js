const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");

// View engine
app.set('view engine', 'ejs');


// Static
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database 
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })


app.use("/", categoriesController);  

app.get("/", (require, response) => {
    response.render("index");
})

app.listen(8080, () => {
    console.log("O servidor está rodando ");
})