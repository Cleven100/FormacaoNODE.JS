const express = require("express");
const router = express.Router();

router.get("/articles", (require, response) => {
    response.send("ROTA DE CATEGORIAS")
});

router.get("/admin/articles/new", (require, response) => {
    response.send("ROTA DE CATEGORIAS ADMIN NEW ARTICLE")
});


module.exports = router;