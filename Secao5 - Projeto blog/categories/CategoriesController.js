const express = require("express");
const router = express.Router();

router.get("/admin/categories/new", (require, response) => {
    response.render("admin/categories/new");
});

module.exports = router;