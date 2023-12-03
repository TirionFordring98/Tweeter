// script.js

const Tweeter = function () {
    let postIdCounter = 2,
        commentIdCounter = 6,
        posts = [
            // Your existing posts here
        ];

    const getPosts = function () {
        return posts;
    };

    const addPost = function (text) {
        const newPost = {
            text: text,
            id: `p${++postIdCounter}`,
            comments: []
        };
        posts.push(newPost);
        
    };

    const removePost = function (postId) {
        posts = posts.filter(post => post.id !== postId);
        
    };

    const addComment = function (postId, text) {
        const post = posts.find(post => post.id === postId);
        if (post) {
            const newComment = {
                id: `c${++commentIdCounter}`,
                text: text
            };
            post.comments.push(newComment);
           
        }
    };

    const removeComment = function (postId, commentId) {
        const post = posts.find(post => post.id === postId);
        if (post) {
            post.comments = post.comments.filter(comment => comment.id !== commentId);
            
        }
    };

    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
    };
};


