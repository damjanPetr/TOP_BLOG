import pool from "../database.js";
import date from "./date.js";
async function getComments() {
  const [rows] = await pool.query("SELECT * FROM comments;");
  return rows;
}

async function getSingleComment(id) {
  const [rows] = await pool.query(
    `SELECT * FROM comments 
  Where id = ?;`,
    [id]
  );
  return rows;
}

async function createComment(data, post_id) {
  const { body } = data;
  console.log(body);
  const [rows] = await pool.query(
    "INSERT INTO comments (body,post_id,created_at) values(?, ?, ?);",
    [body, post_id, date]
  );
}

async function deleteComment(id) {
  const [rows] = await pool.query("DELETE FROM comments WHERE id = ?; ", [id]);
  return rows;
}

async function updateComment(data, id) {
  const { body } = data;
  const [rows] = await pool.query(
    "UPDATE comments SET body = ? WHERE id = ?  ",
    [body, id]
  );
  return rows;
}

export default {
  getComments,
  getSingleComment,
  createComment,
  deleteComment,
  updateComment,
};
