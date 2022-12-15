const blogs_add_GET =  (req, res) => {

    res.render('add-blog.ejs', { pageTitle: "New Blog"})
}

module.exports = blogs_add_GET;