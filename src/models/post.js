const posts = [{id:0,author:"yu",content:"test"}];
let id = 0;


function getAllPost(post) {
    return JSON.parse(JSON.stringify(posts));//deep copy of obj
}

function addPost(post) {
    const newPost = {id:id++,...post};
    posts.push(newPost);
    return newPost;
}

function getPostById(id) {
    return posts.find(i => i.id === id);
}

function updatePostById(id, newPost) {
    const postIndex = getPostIndexById(id);
    const updatePost = {id,...newPost};
    posts[postIndex] = updatePost;
    return updatePost;
}

function deletePostById(id) {
    const postIndex = getPostIndexById(id);
    const deletedPost = posts.splice(postIndex,1);
    return deletedPost;
}

function getPostIndexById(id) {
    return posts.findIndex(i => i.id === id);
}

function doesIdExist(id) {
    return getPostIndexById(id) == -1;
}

module.exports = {
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById,
    addPost,
    doesIdExist
};