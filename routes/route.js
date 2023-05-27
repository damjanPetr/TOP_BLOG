import express from "express";
const start = express.Router();

import userRouter from "./userRouter.js";
import postRouter from "./postRouter.js";
import commentsRouter from "./commentsRouter.js";
start.get("/", (req, res, next) => {
  console.log(req.headers);
  res.send(req.header("host"));
});

start.use("/user", userRouter);

// posts
userRouter.use(
  "/:user_id/posts",
  (req, res, next) => {
    req.user_id = req.params.user_id;
    next();
  },
  postRouter
);

//comments
postRouter.use(
  "/:post_id/comments",
  (req, res, next) => {
    req.post_id = req.params.post_id;
    next();
  },
  commentsRouter
);

export default start;
