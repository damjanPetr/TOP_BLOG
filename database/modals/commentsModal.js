import pool from "../database.js";
import date from "./date.js";
async function getComments(post_id) {
  const [rows] = await pool.query("SELECT * FROM comments WHERE post_id = ?;", [
    post_id,
  ]);
  return rows;
}
async function getSingleComment(post_id, id) {
  const [rows] = await pool.query(
    `SELECT * FROM comments 
  Where post_id = ? and id = ?;`,
    [post_id, id]
  );
  return rows;
}

async function createComment(data, post_id) {
  const { body } = data;
  const [rows] = await pool.query(
    "INSERT INTO comments (body,post_id,created_at) values(?, ?, ?);",
    [body, post_id, date]
  );
  return rows;
}

async function deleteComment(post_id, id) {
  const [rows] = await pool.query(
    "DELETE FROM comments WHERE post_id = ? AND id = ?; ",
    [post_id, id]
  );
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
