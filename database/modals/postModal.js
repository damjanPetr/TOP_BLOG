import pool from "../database.js";
import date from "./date.js";
async function getPosts(author_id) {
  const [rows] = await pool.query("SELECT * FROM posts WHERE author_id = ? ;", [
    author_id,
  ]);
  return rows;
}

async function getSinglePost(author_id, id) {
  const [rows] = await pool.query(
    `SELECT * FROM posts
  Where author_id = ? AND id = ? ;`,
    [author_id, id]
  );

  return rows;
}

async function createPost(data, author_id) {
  const { title, content } = data;

  const [rows] = await pool.query(
    "INSERT INTO posts (title,content,author_id,created_at) values(?, ?,?,?)",
    [title, content, author_id, date]
  );
  return rows;
}

async function deletePost(author_id, id) {
  const [rows] = await pool.query(
    "DELETE FROM posts WHERE author_id = ? and id = ?;",
    [author_id, id]
  );
  return rows;
}

async function updatePost(data, author_id, id) {
  const { title, content } = data;
  const [rows] = await pool.query(
    "UPDATE posts SET title = ?,content = ?, updated_at = ? where id= ? and author_id = ?",
    [title, content, date, id, author_id]
  );
  console.log(rows);
  return rows;
}

export default { getPosts, getSinglePost, createPost, deletePost, updatePost };
