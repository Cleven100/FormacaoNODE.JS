const express = require("express");
const router = express.Router();

router.get("/categories", (require, response) => {
    response.send("ROTA DE CATEGORIAS")
});

router.get("/admin/categories/new", (require, response) => {
    response.send("ROTA DE CATEGORIAS ADMIN")
});


module.exports = router;