const express = require('express')
const { blogs_GET, blogs_add_GET, blogs_add_POST, blogs_id_GET, blogs_id_DELETE } = require('../controllers/blogsController.js')

const blogRouter = express.Router()

blogRouter.get('/', blogs_GET)

blogRouter.get('/add-blog', blogs_add_GET)

blogRouter.post('/add-blog', blogs_add_POST)

blogRouter.get('/:id' , blogs_id_GET)

blogRouter.delete('/:id' , blogs_id_DELETE)


module.exports = blogRouter;