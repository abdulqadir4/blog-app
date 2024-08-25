document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('postForm');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const postsContainer = document.getElementById('posts');

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        postsContainer.innerHTML = '';
        posts.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    function savePost(title, content) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ title, content });
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = titleInput.value;
        const content = contentInput.value;
        savePost(title, content);
        titleInput.value = '';
        contentInput.value = '';
        loadPosts();
    });

    loadPosts();
});
