import comments from "../controllers/commentsController.js";
import asyncHandler from "express-async-handler";
import express from "express";

const commentsRouter = express.Router({ mergeParams: true });

// DONE:
commentsRouter.get("/", asyncHandler(comments.get_all_comments));
// DONE:
commentsRouter.get("/:id", asyncHandler(comments.get_single_comments));
// DONE:
commentsRouter.post("/", asyncHandler(comments.create_comment));
// DONE:
commentsRouter.put("/:id", asyncHandler(comments.update_comment));
// DONE:
commentsRouter.delete("/:id", asyncHandler(comments.delete_comment));
export default commentsRouter;
