import pool from "../database.js";

async function getComments() {
  const [rows] = await pool.query("SELECT * FROM comments");
  return rows;
}

async function getSingleComment(comment) {
  const [rows] = await pool.query(
    `SELECT * FROM comments 
  Where username = ?;`,
    [user]
  );
}

async function createComment(username) {
  const [rows] = await pool.query("INSERT INTO comments values(?, ?)", [
    username,
  ]);
}

async function deleteComment(comment) {
  const [row] = await pool.query("DELETE FROM comments WHERE username = ?; ", [
    comment,
  ]);
}

async function updateComment(comment, newcomment) {
  const [row] = await pool.query("UPDATE comments SET username = ? ", [
    comment,
    newcomment,
  ]);
}

export {
  getComments,
  getSingleComment,
  createComment,
  deleteComment,
  updateComment,
};
