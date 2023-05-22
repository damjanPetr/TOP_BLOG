import pool from "../database.js";

async function getPosts() {
  const [rows] = await pool.query("SELECT * FROM posts");
  return rows;
}

async function getSinglePost(comment) {
  const [rows] = await pool.query(
    `SELECT * FROM posts 
  Where username = ?;`,
    [user]
  );
  return row;
}

async function createPost(username) {
  const [rows] = await pool.query("INSERT INTO posts values(?, ?)", [username]);
}

async function deletePost(comment) {
  const [row] = await pool.query("DELETE FROM posts WHERE username = ?; ", [
    comment,
  ]);
}

async function updatePost(comment, newcomment) {
  const [row] = await pool.query("UPDATE posts SET username = ? ", [
    comment,
    newcomment,
  ]);
}

export default { getPosts, getSinglePost, createPost, deletePost, updatePost };
