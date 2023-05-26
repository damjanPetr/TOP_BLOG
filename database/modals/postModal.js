import pool from "../database.js";
import date from "./date.js";
async function getPosts() {
  const [rows] = await pool.query("SELECT * FROM posts;");
  return rows;
}

async function getSinglePost(post) {
  const [rows] = await pool.query(
    `SELECT * FROM posts
  Where id = ?;`,
    [post]
  );

  return rows;
}

async function createPost(data, id) {
  const { title, content, author } = data;
  console.log(data);
  const [rows] = await pool.query(
    "INSERT INTO posts (title,content,author_id,created_at) values(?, ?,?,?)",
    [title, content, id, date]
  );
  return rows;
}

async function deletePost(id) {
  const [rows] = await pool.query("DELETE FROM posts WHERE id = ?; ", [id]);
  return rows;
}

async function updatePost(data, id) {
  const { title, content } = data;
  const [rows] = await pool.query(
    "UPDATE posts SET title = ?,content = ?, updated_at = ? where id= ?;",
    [title, content, date, id]
  );
  console.log(rows);
  return rows;
}

export default { getPosts, getSinglePost, createPost, deletePost, updatePost };
