const blogModel = require('../models/blogModel.js');

const blogs_id_DELETE =  (req, res) => {
    blogModel.findByIdAndRemove(req.params.id)
        .then(result =>{
            console.log('data removed')
            console.log(result)
            res.json({ urlRedirect: '/blogs' })
        })
        .catch(err => console.log(err))

}



module.exports = blogs_id_DELETE;