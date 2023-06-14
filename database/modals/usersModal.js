import pool from "../database.js";
import date from "./date.js";
import bcrypt from "bcrypt";
import validator from "express-validator";
import returnJWT from "../../routes/jwt.js";
async function getUsers(id) {
  const [rows] = await pool.query("SELECT * FROM users ;");
  return rows;
}

async function getSingleUser(id) {
  const [rows] = await pool.query(
    `SELECT * FROM users 
  Where id = ?;`,
    [id]
  );
  return rows;
}

async function createUser(data) {
  const { username, email, password } = data;
  const [getDatabeUsernameResult] = await pool.query(
    "select * from users where username = ?;",
    [username]
  );
  if (getDatabeUsernameResult[0] === undefined) {
    bcrypt.hash(password, 10, async (err, hashPassword) => {
      const [rows] = await pool.query(
        "INSERT INTO users (username,password,email,registered_at) VALUES (?, ?, ?,?);",
        [username, hashPassword, email, date]
      );
    });
    const { signedToken, expiresIn } = await returnJWT(data);
    return {
      success: "User successfully registered",
      signedToken: signedToken,
      expiresIn: expiresIn,
      user: data,
    };
  } else {
    return { message: "User already exists" };
  }
}

async function deleteUser(id) {
  const [row] = await pool.query("DELETE FROM users WHERE id = ?; ", [id]);
  return row;
}

async function updateUser(data, id) {
  const { username, password, email } = data;
  const [row] = await pool.query(
    "UPDATE users SET username = ? ,password = ?,email= ? where id = ?",
    [username, password, email, id]
  );
  return row;
}

export { getUsers, getSingleUser, createUser, deleteUser, updateUser };
