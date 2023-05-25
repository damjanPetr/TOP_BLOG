import commentsModal from "../database/modals/commentsModal.js";

//DONE:
const get_all_comments = async (req, res) => {
  const result = await commentsModal.getComments();
  res.json(result);
};

//DONE:
const create_comment = async (req, res, next) => {
  const data = req.body[0];
  const id = req.params.id;
  const result = await commentsModal.createComment(data, id);
  res.json(result);
};

//DONE:
const delete_comment = async (req, res) => {
  const result = await commentsModal.deleteComment(req.params.id);
  res.json(result);
};

//DONE:
const update_comment = async (req, res) => {
  const data = req.body[0];
  const id = req.params.id;
  const result = await commentsModal.updateComment(data, id);
  res.json(data);
};

//DONE:
const get_single_comments = async (req, res) => {
  const id = req.params.id;
  const result = await commentsModal.getSingleComment(id);
  res.json(result);
};

export default {
  get_all_comments,
  get_single_comments,
  create_comment,
  delete_comment,
  update_comment,
  get_single_comments,
};
