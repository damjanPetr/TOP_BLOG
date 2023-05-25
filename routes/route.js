import express from "express";
const route = express.Router();

import users from "../controllers/usersController.js";
import posts from "../controllers/postsController.js";
import comments from "../controllers/commentsController.js";
import asyncHandler from "express-async-handler";

const userRouter = express.Router();
const postRouter = express.Router();
const commentsRouter = express.Router();

route.get("/", (req, res, next) => {
  res.send("<h1>Play</h1>");
});

route.use("/", userRouter);
route.use("/", postRouter);
route.use("/", commentsRouter);

// users
userRouter.get("/user", asyncHandler(users.get_all_users));
userRouter.get("/user/:id", asyncHandler(users.get_single_user));
userRouter.post("/user/:id", asyncHandler(users.create_user));
userRouter.patch("/user/:id", asyncHandler(users.update_user));
userRouter.delete("/user/:id", asyncHandler(users.delete_user));

//

// posts

postRouter.get("/post", asyncHandler(posts.get_all_posts));
postRouter.get("/post/:id", asyncHandler(posts.get_single_post));
postRouter.post("/post/:id", asyncHandler(posts.create_post));
postRouter.patch("/post/:id", asyncHandler(posts.update_post));
postRouter.delete("/post/:id", asyncHandler(posts.delete_post));

//comments
commentsRouter.get("/comments", asyncHandler(comments.get_all_comments));
commentsRouter.get("/comments/:id", asyncHandler(comments.get_single_comments));
commentsRouter.post("/comments/:id", asyncHandler(comments.create_comment));
commentsRouter.patch("/comments/:id", asyncHandler(comments.update_comment));
commentsRouter.delete("/comments/:id", asyncHandler(comments.delete_comment));

export default route;
