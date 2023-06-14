import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import session from "express-session";
import passport from "passport";
import "./database/database.js";
import errorHandler from "./errorMiddleware.js";
import route from "./routes/route.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./client/dist"));

console.log("All middleware functions are loaded");

app.use(
  "/api",
  cors(),
  // passport.authenticate("jwt", { session: false }),
  route
);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use((req, res, next) => {
  res.status(404).send("Sorry The Requested Route Doesn't Exist");
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Your server is running sucessfully at  http://localhost:${PORT}`
  );
});
