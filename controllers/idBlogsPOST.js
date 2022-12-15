const blogModel = require('../models/blogModel.js');


const blog_id_PUT = (req, res) => {
    const { blogTitle, blogSnippet, blogBody } = req.body
    blogModel.findByIdAndUpdate(req.params.id, { blogTitle, blogSnippet, blogBody })
        .then(result => {
            console.log(result)
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))

}




module.exports = blog_id_PUT;