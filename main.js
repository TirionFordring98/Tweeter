const tweeter = Tweeter();
const renderer = Renderer();



function addPost() {
    const inputText = $('#input').val();
    if (inputText.trim() !== "") {
        tweeter.addPost(inputText);
        renderer.renderPosts(tweeter.getPosts())
        $('#input').val(""); // Clear the input field
    }
}
