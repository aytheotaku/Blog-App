const blogModel = require('../models/blogModel.js');

const blogs_add_POST = (req, res) => {

    const { blogTitle, blogSnippet, blogBody } = req.body;

    const blog = new blogModel({
        blogTitle,
        blogSnippet,
        blogBody
    })

    blog.save()
        .then(() => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
} 

module.exports = blogs_add_POST
