import express from "express";

const start = express.Router();

import userRouter from "./userRouter.js";
import postRouter from "./postRouter.js";
import commentsRouter from "./commentsRouter.js";
import passport from "passport";
import LocalStrategy from "passport-local";

import session from "express-session";

start.get("/", (req, res, next) => {
  console.log(req.headers);
  res.send("you are on the api route");
});

// start.use(passport);

start.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// function crypCreateUsers(username,password,done)
// {

// }
start.use(passport.session());
start.use(passport.initialize());
// passport.use( new LocalStrategy.Strategy(crypCreateUsers)
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
