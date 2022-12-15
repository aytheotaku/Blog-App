const blogModel = require('../models/blogModel.js');

const blogs_GET = (req, res) => {
    blogModel.find().sort({createdAt: -1})
        .then(result => {
            res.render('index.ejs', {pageTitle:'Home-Page', blogs: result})
        })
        .catch(err => console.log(err));
}


module.exports = blogs_GET;