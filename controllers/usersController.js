import * as usersModal from "../database/modals/usersModal.js";
const get_all_users = async (req, res) => {
  const result = await usersModal.getUsers();
  res.json(result);
};

// DONE:
const create_user = async (req, res) => {
  const data = req.body[0];

  const result = await usersModal.createUser(data);

  res.send(result);
};

// DONE:
const delete_user = async (req, res) => {
  const result = await usersModal.deleteUser(req.params.id);
  res.json(result);
};

//DONE:
const update_user = async (req, res) => {
  const data = req.body[0];
  console.log(data);
  const result = await usersModal.updateUser(data, req.params.id);
  res.json(result);
};
//DONE:
const get_single_user = async (req, res) => {
  const result = await usersModal.getUsers(req.params.id);
  res.json(req.body);
};

export default {
  get_all_users,
  create_user,
  delete_user,
  update_user,
  get_single_user,
};
