import express from "express";
const route = express.Router();

import users from "../controllers/usersController.js";
import posts from "../controllers/postsController.js";
import comments from "../controllers/commentsController.js";

const userRouter = express.Router();
const postRouter = express.Router();
const commentsRouter = express.Router();

route.get("/", (req, res, next) => {
  res.send("<h1>Play</h1>");
});

route.use("/user", userRouter);
route.use("/post", postRouter);
route.use("/comments", commentsRouter);

// users
userRouter.get("/", users.get_all_users);
userRouter.get("/:id", users.get_single_user);
userRouter.post("/create/:id", users.create_user);
userRouter.post("/update/:id", users.update_user);
userRouter.post("/delete/:id", users.delete_user);

//

// posts

postRouter.get("/", posts.get_all_posts);
postRouter.get("/:id", posts.get_single_post);
postRouter.post("/:id", posts.create_post);
postRouter.put("/update/:id", posts.update_post);
postRouter.delete("/delete/:id", posts.delete_post);

//comments

commentsRouter.get("/", comments.get_all_comments);
commentsRouter.get("/:id", comments.get_single_comments);
commentsRouter.post("/create/:id", comments.create_comment);
commentsRouter.post("/update/:id", comments.update_comment);
commentsRouter.post("/delete/:id", comments.delete_comment);

export default route;
