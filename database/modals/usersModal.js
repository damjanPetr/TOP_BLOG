import pool from "../database.js";

async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
}

async function getSingleUser(user) {
  const [rows] = await pool.query(
    `SELECT * FROM users 
  Where username = ?;`,
    [user]
  );
  return rows;
}

async function createUser(username, password) {
  const [rows] = await pool.query(
    "INSERT INTO users (username,password)values(?, ?)",
    [username, password]
  );
  return rows;
}

async function deleteUser(id) {
  const [row] = await pool.query("DELETE FROM users WHERE id = ?; ", [id]);
  return row;
}

async function updateUser(user, password, id) {
  const [row] = await pool.query(
    "UPDATE users SET username = ? ,password = ? where id = ?",
    [user, password, id]
  );
}
export { getUsers, getSingleUser, createUser, deleteUser, updateUser };
