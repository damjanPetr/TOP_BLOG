import { getSingleForAuth } from "./passport-config.js";
import bcrypt from "bcrypt";
import { json } from "express";
import jwt from "jsonwebtoken";
// a funciton that return the JWS token in JSON format
export default async function auth(req, res, next) {
  const { username, password } = req.body;
  const [dataUser] = await getSingleForAuth(username);
  if (dataUser === undefined) {
    return json({ message: "Invalid username" });
  }
  console.log(dataUser);
  if (await bcrypt.compare(password, dataUser.password)) {
    const token = jwt.sign({ username: dataUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "loggedin successfully", token: token });
  } else {
    res.json({ message: "Invalid password" });
  }
}
