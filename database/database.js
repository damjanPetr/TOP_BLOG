import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    database: "blog",
    password: "aoeu",
  })
  .promise();

export default pool;
