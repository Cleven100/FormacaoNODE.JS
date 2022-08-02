const express = require("express");
const router = express.Router();

router.get("/admin/categories/new", (require, response) => {
    response.render("admin/categories/new");
});

router.get("/categories/save", (require, response) => {
   var title =require.body.title;
   if(title != undefined){
       
   }else {
    response.redirect("/admin/categories/new");
   }
});

module.exports = router;