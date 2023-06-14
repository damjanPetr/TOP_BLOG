import passport from "passport";
import pool from "../database/database.js";
import passportJWT from "passport-jwt";

export async function getSingleForAuth(username) {
  const [rows] = await pool.query("select * from users where username = ?", [
    username,
  ]);
  return rows;
}

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_PUBLIC_KEY,
    },
    async (jwtpayload, cb) => {
      console.log("🚀 ~ file: passport-config.js:22 ~ jwtpayload:", jwtpayload);
      const user = await getSingleForAuth(jwtpayload.username);
      if (user) {
        return cb(null, user);
      } else {
        return cb(null, false);
      }
    }
  )
);
