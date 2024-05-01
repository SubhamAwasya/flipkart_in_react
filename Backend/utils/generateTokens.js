import jwt from "jsonwebtoken";

export function generateAccessToken(id) {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

export function generateRefreshToken(id) {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET);
}
