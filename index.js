import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import express from "express";
import "./database/database.js";
import route from "./routes/route.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

// app.use(express.urlencoded());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type",
    "Accept"
  );
  next();
});

console.log("All middleware loaded");

app.use("/", route);
app.listen(PORT, () => {
  console.log(
    `Your server is running sucessfully at  http://localhost:${PORT}`
  );
});
