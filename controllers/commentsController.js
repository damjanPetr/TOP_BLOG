import {
  getComments,
  getSingleComment,
  createComment,
  deleteComment,
  updateComment,
} from "../database/modals/commentsModal.js";

//TODO:
const get_all_comments = (req, res) => {
  res.send(" got comments not yet IMPLEMENTED");
};

//TODO:
const create_comment = (req, res) => {
  res.send("delete user NOT IMPLEMENTED");
};

//TODO:
const delete_comment = (req, res) => {
  res.send("delete user NOT IMPLEMENTED");
};

//TODO:
const update_comment = (req, res) => {
  res.send("update user NOT IMPLEMENTED");
};

//TODO:
const get_single_comments = (req, res) => {
  res.send("update user NOT IMPLEMENTED");
};

export default {
  get_all_comments,
  get_single_comments,
  create_comment,
  delete_comment,
  update_comment,
  get_single_comments,
};
