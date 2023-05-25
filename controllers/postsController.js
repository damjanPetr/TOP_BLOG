import postModal from "../database/modals/postModal.js";

// DONE:
const get_all_posts = async (req, res) => {
  const result = await postModal.getPosts();
  res.json(result);
};
const create_post = async (req, res) => {
  const data = req.body[0];
  const result = await postModal.createPost(data, req.params.id);
  res.json(result);
};
// DONE:
const delete_post = async (req, res) => {
  const id = req.params.id;
  const result = await postModal.deletePost(id);
  res.json(result);
};

//DONE:
const update_post = async (req, res) => {
  const data = req.body[0];
  console.log(data);
  const id = req.params.id;
  const result = await postModal.updatePost(data, id);
  console.log(result);

  res.json(result);
};
//DONE:
const get_single_post = async (req, res) => {
  try {
    const result = await postModal.getSinglePost(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  get_all_posts,
  create_post,
  delete_post,
  update_post,
  get_single_post,
};
