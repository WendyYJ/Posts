const express = require("express");
const validated = require("../middleware/validated");
const {
    addPost,
    getPostById,
    getAllPost,
    updatePostById,
    deletePostById
} = require("../controllers/post");

const router = express.Router();

router.get("",getAllPost);

router.get("/:id",validated,getPostById);

router.post("",addPost);

router.put("/:id",validated,updatePostById);

router.delete("/:id",validated,deletePostById);

module.exports = router;


