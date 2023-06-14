import { getSingleForAuth } from "./passport-config.js";
import bcrypt from "bcrypt";
import { json } from "express";
import jwt from "jsonwebtoken";
import "./passport-config.js";
import returnJWT from "./jwt.js";

// a funciton that return the JWS token in JSON format
export default async function auth(req, res, next) {
  const { username, password } = req.body;
  const [dataUser] = await getSingleForAuth(username);
  if (dataUser === undefined) {
    return json({ message: "Invalid username" });
  }
  if (await bcrypt.compare(password, dataUser.password)) {
    const { signedToken, expiresIn } = await returnJWT(dataUser);
    res.json({
      message: "Logged-in successfully",
      signedToken: signedToken,
      expiresIn: expiresIn,
      user: dataUser,
    });
  } else {
    res.json({ message: "Invalid password" });
  }
}
