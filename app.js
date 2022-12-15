const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogModel = require('./models/blogModel.js');
const blogRouter = require('./routerHandler/blogRouter.js')
require('dotenv').config()

//database connection string
const databaseConnectionString = process.env.DATABASE_CONNECTION_STRING

mongoose.set('strictQuery', true);

mongoose.connect(databaseConnectionString)
    .then(() => {
        console.log('database connected')
        app.listen(process.env.PORT || 3000, ()=> console.log('listening on port 3000'));
    })
    .catch(err => console.log(`An error occured: ${err}`));

const app = express();

// setting ejs as view engine
app.set('view-engine', 'ejs')

//using express json middleware

app.use(express.json());

//using static files
app.use(express.static('public'));

//using body parser middleware
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

//setting blog Routes
app.use('/blogs', blogRouter);


app.use((req, res) => {
    res.status(404).render('404.ejs', {pageTitle : "404 page"})
})

