const mongoose = require('mongoose');

const { Schema } = mongoose;


const blogSchema = new Schema({
    blogTitle: {type: String, required: true},
    blogSnippet: {type: String, required: true},
    blogBody: {type: String, required: true},

})