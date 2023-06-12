import posts from "../controllers/postsController.js";
import asyncHandler from "express-async-handler";
import express from "express";

export const postRouter = express.Router({ mergeParams: true });
postRouter.get("/posts", asyncHandler(posts.get_every_post));

// DONE:
postRouter.get("/", asyncHandler(posts.get_all_posts));
// DONE:
postRouter.get("/:post_id", asyncHandler(posts.get_single_post));
// DONE:
postRouter.post("/", asyncHandler(posts.create_post));
// DONE:
postRouter.put("/:post_id", asyncHandler(posts.update_post));
// DONE:
postRouter.delete("/:post_id", asyncHandler(posts.delete_post));

export default postRouter;
