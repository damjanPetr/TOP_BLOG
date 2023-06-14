import express, { json } from "express";
import userRouter from "./userRouter.js";
import postRouter from "./postRouter.js";
import commentsRouter from "./commentsRouter.js";
import "./passport-config.js";
import auth from "./auth.js";
import passport from "passport";

const start = express.Router();
start.get("/posts", passport.authenticate("jwt", { session: false }));
start.post("/loginauth", auth);

start.get("/auth", (req, res) => {
  if (req.isAuthenticated) {
    res.json({ auth: true });
  } else {
    res.json({ auth: false });
  }
});

start.get("/", (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    res.json(req.user);
  } else {
  }
  res.json({ message: "no user" });
});

start.use("/user", userRouter);

// posts router thats nested in users
userRouter.use(
  "/:user_id/posts",
  (req, res, next) => {
    req.user_id = req.params.user_id;
    next();
  },
  postRouter
);

//comments router thats nested in posts
postRouter.use(
  "/:post_id/comments",
  (req, res, next) => {
    req.post_id = req.params.post_id;
    next();
  },
  commentsRouter
);

export default start;
