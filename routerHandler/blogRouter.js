const express = require('express')

const blogRouter = express.Router()
const blogModel = require('../models/blogModel.js');

blogRouter.get('/', (req, res) => {
    blogModel.find().sort({createdAt: -1})
        .then(result => {
            res.render('index.ejs', {pageTitle:'Home-Page', blogs: result})
        })
        .catch(err => console.log(err));
})

blogRouter.get('/add-blog', (req, res) => {

    res.render('add-blog.ejs', { pageTitle: "New Blog"})
})

blogRouter.post('/add-blog', (req, res) => {

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
})


blogRouter.get('/:id' , (req, res) => {
   blogModel.findById(req.params.id)
    .then(result => {
        res.render('about-blog.ejs', {pageTitle: 'Blog', blog: result})
    })
    .catch(err => {
        res.status(404).render('404.ejs', {pageTitle : "404 page"})
    }) 
})

blogRouter.delete('/:id' , (req, res) => {
    blogModel.findByIdAndRemove(req.params.id)
        .then(result =>{
            console.log('data removed')
            console.log(result)
            res.json({ urlRedirect: '/blogs' })
        })
        .catch(err => console.log(err))

})


module.exports = blogRouter;