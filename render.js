const Renderer = function () {
    const renderPosts = function (posts) {
        const $postsContainer = $('#posts');
        $postsContainer.empty();

        posts.forEach(post => {
            const postHTML = `
                <div class="post" data-id="${post.id}">
                    <div class="post-text">${post.text}</div>
                    <div class="comments">
                        ${renderComments(post.comments)}
                    </div>
                </div>
            `;
            $postsContainer.append(postHTML);
        });
    };

    const renderComments = function (comments) {
        return comments.map(comment => `
            <div class="comment" data-id="${comment.id}">
                <div class="delete-comment" onclick="deleteComment('${comment.id}')">X</div>
                ${comment.text}
            </div>
        `).join('');
    };

    return {
        renderPosts: renderPosts
    };
}
