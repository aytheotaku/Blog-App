const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogModel = require('./models/blogModel.js');

//database connection string
const databaseConnectionString = 'mongodb+srv://aytheotaku:stardustcrusaders123@nodecluster.xpuvq9k.mongodb.net/BlogsDatabase?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);

mongoose.connect(databaseConnectionString)
    .then(() => {
        console.log('database connected')
        app.listen(3000, ()=> console.log(`listening on port 3000`));
    })
    .catch(err => console.log(`An error occured: ${err}`));

const app = express();

// setting ejs as view engine
app.set('view-engine', 'ejs')

//using express json middleware

app.use(express.json());

//using body parser middleware
app.use(bodyParser.urlencoded({extended: false}))


//setting routes
app.get('/', (req,res) => {
    
  res.status(301).redirect('/blogs')
})

app.get('/blogs', (req, res) => {
    blogModel.find().sort({createdAt: -1})
        .then(result => {
            res.render('index.ejs', {pageTitle:'Home-Page', blogs: result})
        })
        .catch(err => console.log(err));
})

app.get('/blogs/add-blog', (req, res) => {

    res.render('add-blog.ejs', { pageTitle: "New Blog"})
})

app.post('/blogs/add-blog', (req, res) => {

    const { blogTitle, blogSnippet, blogBody } = req.body;

    const blog = new blogModel({
        blogTitle,
        blogSnippet,
        blogBody
    })

    blog.save()
        .then(() => {
            console.log('data succesfully added')
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
})


app.get('/blogs/:id' , (req, res) => {
   blogModel.findById(req.params.id)
    .then(result => {
        res.render('about-blog.ejs', {pageTitle: 'Blog', blog: result})
    })
    .catch(err => console.log(err)) 
})



app.use((req, res) => {
    res.status(404).render('404.ejs', {pageTitle : "404 page"})
})

