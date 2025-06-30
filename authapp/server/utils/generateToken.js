import jwt from "jsonwebtoken";
export const generateToken = (res, userId, msg) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      msg,
      user,
    });
};
