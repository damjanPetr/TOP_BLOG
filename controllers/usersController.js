import * as usersModal from "../database/modals/usersModal.js";

const get_all_users = async (req, res) => {
  const result = await usersModal.getUsers();
  res.json(result);
};
const get_single_user = async (req, res) => {
  const id = req.params.user_id;
  const result = await usersModal.getSingleUser(id);
  res.json(result);
};

const create_user = async (req, res) => {
  const data = req.body;
  const result = await usersModal.createUser(data);
  res.json(result);
};

const delete_user = async (req, res) => {
  const id = req.params.user_id;
  const result = await usersModal.deleteUser(id);
  res.json(result);
};

const update_user = async (req, res) => {
  const data = req.body;
  const id = req.params.user_id;
  const result = await usersModal.updateUser(data, id);
  res.json(result);
};

export default {
  get_all_users,
  create_user,
  delete_user,
  update_user,
  get_single_user,
};
