import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./errorMiddleware.js";
dotenv.config();

import cookieParser from "cookie-parser";
import express from "express";
import "./database/database.js";
import route from "./routes/route.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type",
    "Accept"
  );
  next();
});

console.log("All middleware functions are loaded");

app.use("/", route);
//
app.use((req, res, next) => {
  res.status(404).send("Sorry The Requested Route Doesn't Exist");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Your server is running sucessfully at  http://localhost:${PORT}`
  );
});
