import dot from "dotenv";
dot.config();

export const url = `http://localhost:${process.env.PORT}`;

console.log(url);
