const blogModel = require('../models/blogModel.js');

const blogs_id_GET = (req, res) => {
    blogModel.findById(req.params.id)
     .then(result => {
         res.render('about-blog.ejs', {pageTitle: 'Blog', blog: result})
     })
     .catch(err => {
         res.status(404).render('404.ejs', {pageTitle : "404 page"})
     }) 
 }


 module.exports = blogs_id_GET;