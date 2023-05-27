import users from "../controllers/usersController.js";
import asyncHandler from "express-async-handler";
import express from "express";
const userRouter = express.Router();
// users
// DONE:
userRouter.get("/", asyncHandler(users.get_all_users));
userRouter.get("/:user_id", asyncHandler(users.get_single_user));
userRouter.post("/", asyncHandler(users.create_user));
userRouter.patch("/:user_id", asyncHandler(users.update_user));
userRouter.delete("/:user_id", asyncHandler(users.delete_user));

export default userRouter;
