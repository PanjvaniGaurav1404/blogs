const express = require("express");
const router = express.Router();

const {dummyController} = require("../controller/dummyController")
const {createComment} = require("../controller/CommentController")
const {createPost,getAllPosts} = require("../controller/PostController")
const {likePost,unlikePost} = require("../controller/LikeController")

router.get("/dummy",dummyController);
router.get("/comments/create",createComment)
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

module.exports = router;