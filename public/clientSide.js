const btn = document.getElementById('deleteBlog');

btn.addEventListener('click', () => {
    
    fetch(`/blogs/${btn.dataset.blogid}`, {
        method: "DELETE",
    })
        .then(result => result.json())
        .then(data => {
            window.location.replace(`${data.urlRedirect}`)
        })
        .catch(err => console.log(err))

})