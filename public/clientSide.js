const btn = document.getElementById('deleteBlog');

btn.addEventListener('click', () => {
    
    fetch(`http://localhost:3000/blogs/${btn.dataset.blogid}`, {
        method: "DELETE",
    })
        .then((res) => {
            console.log(`reached server succesfully`)
            window.location.replace('http://localhost:3000/blogs/')
        })
        .catch(err => console.log(err))
   

})