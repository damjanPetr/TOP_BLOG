import postModal from "../database/modals/postModal.js";

//TODO:

const get_all_posts = async (req, res) => {
  // console.log(req.message);
  const result = await postModal.getPosts();
  res.json(result);
};
//TODO:
const create_post = (req, res) => {
  res.send("create single blog  NOT IMPLEMENTED");
};

//TODO:
const delete_post = (req, res) => {
  res.send("delete user NOT IMPLEMENTED");
};

//TODO:
const update_post = (req, res) => {
  res.send("update single NOT IMPLEMENTED");
};
//TODO:
const get_single_post = (req, res) => {
  res.send("get single blog user NOT IMPLEMENTED");
};

export default {
  get_all_posts,
  create_post,
  delete_post,
  update_post,
  get_single_post,
};
