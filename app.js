const express = require('express');
const mongoose = require('mongoose');

//
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

//setting routes
app.get('/', (req,res) => {
    const blog = []
    res.render('index.ejs', {pageTitle: 'Home-Page', blogs:blog})
})

app.get('/blogs/add-blog', (req, res) => {
    res.render('add-blog.ejs', {pageTitle: "New Blog"})
})


