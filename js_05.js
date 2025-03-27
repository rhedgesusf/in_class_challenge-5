import { getPosts } from './api.js'

function displayPosts() {
    const container = document.getElementById('PostContainer');

    getPosts()
    .then(posts => {
        posts.slice(0, 5).forEach(post => {
            const div = document.createElemeny('div');
            container.appendChild(div);
        });
    })
    .catch(err => {
        container.innerHTML = `<p style="color:red;">Failed to load posts; ${err.message}</p>`;
    });
}

displayPosts();