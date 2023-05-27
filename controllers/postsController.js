import postModal from "../database/modals/postModal.js";

const get_all_posts = async (req, res) => {
  const author_id = req.params.user_id;
  const result = await postModal.getPosts(author_id);
  res.json(result);
};

const create_post = async (req, res) => {
  const data = req.body[0];
  const author_id = req.params.user_id;
  const result = await postModal.createPost(data, author_id);
  res.json(result);
};
const delete_post = async (req, res) => {
  const id = req.params.post_id;
  const author_id = req.params.user_id;
  const result = await postModal.deletePost(author_id, id);
  res.json(result);
};

const update_post = async (req, res) => {
  const data = req.body[0];
  const id = req.params.post_id;
  const author_id = req.params.user_id;
  const result = await postModal.updatePost(data, author_id, id);
  console.log(result);

  res.json(result);
};
const get_single_post = async (req, res) => {
  const author_id = req.params.user_id;
  const id = req.params.post_id;
  const result = await postModal.getSinglePost(author_id, id);
  res.json(result);
};

export default {
  get_all_posts,
  create_post,
  delete_post,
  update_post,
  get_single_post,
};
