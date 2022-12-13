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