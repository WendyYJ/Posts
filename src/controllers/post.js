const postModel = require("../models/post");

function addPost(req,res) {
    const {author,content} = req.body;
    const newPost = postModel.addPost({author,content});
    return res.status(201).json(newPost);
}

function getPostById(req,res) {
    const {id} = req.params;
    const post = postModel.getPostById(id);
    return res.status(201).json(post);
}

function getAllPost(req,res) {
    const posts = postModel.getAllPost();
    return res.json(posts);
}

function updatePostById(req,res) {
    const {id} = req.params;
    const {author,content} = req.body;
    const updatedPost = postModel.updatePostById(id,{author,content});
    return res.status(200).send("Successfully updagte the data");
}

function deletePostById(req,res) {
    const {id} = req.params;
    const deletePost = postModel.deletePostById(id);
    return res.status(200).send("Successfully delete the data");
}

module.exports = {
    addPost,
    getPostById,
    getAllPost,
    updatePostById,
    deletePostById
};