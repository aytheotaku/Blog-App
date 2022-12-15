const express = require('express')
const blogModel = require('../models/blogModel.js');

const blogs_GET = (req, res) => {
    blogModel.find().sort({createdAt: -1})
        .then(result => {
            res.render('index.ejs', {pageTitle:'Home-Page', blogs: result})
        })
        .catch(err => console.log(err));
}


const blogs_add_GET =  (req, res) => {

    res.render('add-blog.ejs', { pageTitle: "New Blog"})
}


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

const blogs_id_GET = (req, res) => {
    blogModel.findById(req.params.id)
     .then(result => {
         res.render('about-blog.ejs', {pageTitle: 'Blog', blog: result})
     })
     .catch(err => {
         res.status(404).render('404.ejs', {pageTitle : "404 page"})
     }) 
 }


const blogs_id_DELETE =  (req, res) => {
    blogModel.findByIdAndRemove(req.params.id)
        .then(result =>{
            console.log('data removed')
            console.log(result)
            res.json({ urlRedirect: '/blogs' })
        })
        .catch(err => console.log(err))

}




module.exports = {
    blogs_GET,
    blogs_add_GET,
    blogs_add_POST,
    blogs_id_GET,
    blogs_id_DELETE
}