import express from "express";
import { commentPost, getFeedPosts, getUserPosts, likePost, getUser } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.get("/users/search/:userId", verifyToken, getUser);
/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.post("/:id/comment", verifyToken, commentPost)
export default router;
