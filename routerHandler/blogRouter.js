const express = require('express')
const blogs_GET = require('../controllers/blogsGET')
const blogs_add_GET = require('../controllers/addBlogsGET.js')
const blogs_add_POST = require('../controllers/addBlogsPOST.js');
const blogs_id_GET = require('../controllers/idBlogsGET.js')
const blogs_id_DELETE =  require('../controllers/idBlogsDELETE.js')

const blogRouter = express.Router()

blogRouter.get('/', blogs_GET)

blogRouter.get('/add-blog', blogs_add_GET)

blogRouter.post('/add-blog', blogs_add_POST)

blogRouter.get('/:id' , blogs_id_GET)

blogRouter.delete('/:id' , blogs_id_DELETE)


module.exports = blogRouter;