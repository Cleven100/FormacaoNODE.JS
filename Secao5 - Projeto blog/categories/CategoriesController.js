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


router.post("/categories/delete", (require, response) => {
        var id = require.body.id;
        if(id != undefined) {
           
           if(!isNaN(id)) {
                   
                Category.destroy({
                    where: {
                        id: id
                    }
                }).then(() => {
                    response.redirect("/admin/categories");
                })

           } else {
            response.redirect("/admin/categories");
           }

        } else {
            response.redirect("/admin/categories");
        }
});


router.get("/admin/categories/edit/:id", (require, response) => {
    var id = require.params.id;
    Category.findByPk(id).then(cetegories => {
        if(categoria != undefined) {
              
            

        } else {
            response.redirect("/admin/categories");
        }
    }).catch(erro => {
        response.redirect("/admin/categories");
    })
})

module.exports = router;