# A blog web app implemented with REST APIS.

## This is a blog site created with:
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) AS THE BACKEND RUNTIME ENVIRONMENT

* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) AS THE BACKEND FRAMEWORK

* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=black) MongoDB AS THE DATABASE SOLUTION

* __EJS__ AS THE VIEW ENGINE.


#

## DEMO
I have hosted the app using cyclic (heroku's free tier's over sadly) and you can find the site in the __About__ section of this repository. You can Create, Read, Edit and Delete blog posts.

![Demo Video](/blog-app-reel.gif)

#


# PROJECT ARCHITECTURE
This project was built using the MVC (Models, Views, Controller) Architectural Pattern. 
1. The *__models__* folder: <br />
This contains code for the creation of the database schema and model. <br />
```javascript
const mongoose = require('mongoose');

const { Schema } = mongoose;

//defining database schema with timestamps
const blogSchema = new Schema({
    blogTitle: {type: String, required: true},
    blogSnippet: {type: String, required: true},
    blogBody: {type: String, required: true},

}, { timestamps: true } )

// creating a model with the defined schema above.
const blogModel = mongoose.model('blog', blogSchema)


module.exports = blogModel;
```

2. The *__views__* folder: <br /> 
    This contains *__ejs__* files which are html like templates that allow javascript to manipulate them. The folder contains these templates that will be served to the client depending on what endpoint the client visits.

    The *__models__* and *__views__* do not interact with each other.
    <br />

3. The *__controllers__* folder: <br /> 
    This contains scripts which fire when a specific api endpoint is requested by the client. For example, if a client sends a POST request to the endpoint *blogs/add-blog*, this script will run 

```javascript
const blogModel = require('../models/blogModel.js');

const blogs_add_POST = (req, res) => {

    //get data from the requestbody and store
    const { blogTitle, blogSnippet, blogBody } = req.body;
    
    //create new model based on defined schema
    const blog = new blogModel({
        blogTitle,
        blogSnippet,
        blogBody
    })

    //save document in blogs collections and redirect to homepage
    blog.save()
        .then(() => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
} 
```

4. The *__routeHandler__* folder: <br /> 
    The previous controller code aboe is handled by an express router script in the *__routerHandler__* folder. This script matches api endpoint requests to the appropriate controller scripts. In the case of the POST request to the endpoint *blogs/add-blog* above, this script would run
```javascript
const express = require('express');
const blogRouter = express.Router();

const blogs_add_POST = require('../controllers/addBlogsPOST.js');
blogRouter.post('/add-blog', blogs_add_POST)

```
5. The *__public__* folder: <br /> 
This contains static files the project needs, in this case, client side script I wrote to send a delete request using the fetch api when the delete button associated with a blog gets clicked. Static files can be served to a project with express' in-built middleware.

 <br />

# HOW TO USE FOR YOURSELF.
*  This project is connected to my MongoDB database collection, right now, a person who goes to the site the web app is hosted on can add or remove blogs as the person pleases. If you would like to recreate this using your own MongoDB database, you can simply fork this, then take a look at the .env_example file, create your own .env file and set the value of the DATABASE_CONNECTION_STRING to the connection string of your own MongoDB database.
<br/><br />
Feel free to also do stuff like going to views/partials/nav.ejs and views/partials/head.ejs and changing the name of header tag and title to yours. 

    ![fun edit](/fun-customization.gif)
