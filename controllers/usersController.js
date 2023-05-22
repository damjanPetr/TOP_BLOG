import * as usersModal from "../database/modals/usersModal.js";
const get_all_users = async (req, res) => {
  const result = await usersModal.getUsers();
  res.json(result);
};

const create_user = async (req, res) => {
  const { username, password } = req.params;
  console.log(req.body);
  const result = await usersModal.createUser(username, password);

  res.send(result);
};

//TODO:
const delete_user = async (req, res) => {
  const user = req.params.id;
  try {
    const result = await usersModal.deleteUser(user);
    res.send(result + " deleted");
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

//TODO:
const update_user = async (req, res) => {
  const result = await usersModal.updateUser(req);
  res.json(result);
};
//TODO:
const get_single_user = async (req, res) => {
  console.log(req.body);

  const [first, second] = req.body;

  console.log(first);
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
