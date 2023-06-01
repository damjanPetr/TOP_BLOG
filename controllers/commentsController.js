import commentsModal from "../database/modals/commentsModal.js";

const get_all_comments = async (req, res) => {
  const post_id = req.params.post_id;
  const result = await commentsModal.getComments(post_id);
  res.json(result);
};

const create_comment = async (req, res, next) => {
  const data = req.body;
  const post_id = req.params.post_id;
  const result = await commentsModal.createComment(data, post_id);
  res.json(result);
};

const delete_comment = async (req, res) => {
  const post_id = req.params.post_id;
  const id = req.params.id;
  const result = await commentsModal.deleteComment(post_id, id);
  res.json(result);
};

const update_comment = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await commentsModal.updateComment(data, id);
  res.json(data);
};

const get_single_comments = async (req, res) => {
  const post_id = req.params.post_id;
  const id = req.params.id;
  const result = await commentsModal.getSingleComment(post_id, id);
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
