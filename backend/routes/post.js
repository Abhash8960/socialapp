const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.post("/post/upload", isAuthenticated, createPost);

router.get("/post/:id", isAuthenticated, likeAndUnlikePost);

router.put("/post/:id", isAuthenticated, updateCaption);

router.delete("/post/:id", isAuthenticated, deletePost);

router.get("/posts", isAuthenticated, getPostOfFollowing);

router.put("/post/comment/:id", isAuthenticated, commentOnPost);

router.delete("/post/comment/:id", isAuthenticated, deleteComment);

module.exports = router;
