import jwt from "jsonwebtoken";

export default async function returnJWT(user) {
  const expiresIN = "1d";
  const payload = {
    iat: Date.now(),
    username: user.username,
    email: user.email,
    id: user.id,
  };

  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
    expiresIn: expiresIN,
  });

  return { signedToken: "Bearer " + token, expiresIn: "1d" };
}
