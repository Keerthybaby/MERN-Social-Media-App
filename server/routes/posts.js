import express from "express";
//import { getPostsBySearch } from "../../client/src/actions/posts.js";

import { getPostsBySearch, getPosts, createPost,updatePost,deletePost,likePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/search',getPostsBySearch);
router.get("/", getPosts);
router.post("/", createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);

export default router;
