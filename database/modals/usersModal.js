import pool from "../database.js";
import date from "./date.js";
async function getUsers(id) {
  const [rows] = await pool.query("SELECT * FROM users where id = ?", [id]);
  return rows;
}

async function getSingleUser(data) {
  const id = data[0];
  const [rows] = await pool.query(
    `SELECT * FROM users 
  Where id = ?;`,
    [id]
  );
  return rows;
}

async function createUser(data) {
  const { username, email, password } = data;
  const [rows] = await pool.query(
    "INSERT INTO users (username,password,email,registered_at) VALUES (?, ?, ?,?);",
    [username, password, email, date]
  );
  return rows;
}

async function deleteUser(id) {
  const [row] = await pool.query("DELETE FROM users WHERE id = ?; ", [id]);
  return row;
}

async function updateUser(data, id) {
  const { username, password, email } = data;
  console.log(username, password, email);
  const [row] = await pool.query(
    "UPDATE users SET username = ? ,password = ?,email= ? where id = ?",
    [username, password, email, id]
  );
  return row;
}
export { getUsers, getSingleUser, createUser, deleteUser, updateUser };
