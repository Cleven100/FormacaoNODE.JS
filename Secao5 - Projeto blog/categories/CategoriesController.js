const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

router.get("/admin/categories/new", (require, response) => {
    response.render("admin/categories/new");
});

router.post("/categories/save", (require, response) => {
   var title = require.body.title;
   if(title != undefined){
        
       Category.create({
          title: title,
          slug: slugify(title)
       }).then(() => {
          response.redirect("/");
       })

   }else {
    response.redirect("/admin/categories/new");
   }
});

router.get("/admin/categories", (require, response) => {
   
    Category.findAll().then(categories => {
         response.render("admin/categories/index", {categories: categories });
    });
});



module.exports = router;