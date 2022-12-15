const blogModel = require('../models/blogModel.js');

const blogs_edit_GET  = (req, res) => {
    blogModel.findById(req.params.id)
        .then(result => {
            console.log(result)
            res.render('editblog.ejs', {pageTitle: "Edit Blog", blog:result})
        })
        .catch(err => {
            res.redirect('/')
            console.log(err)
        })

}


module.exports = blogs_edit_GET;