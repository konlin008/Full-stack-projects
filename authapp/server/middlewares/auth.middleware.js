import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: "token missing" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user_id = decoded.userId;
    next();
  } catch (error) {
    console.log("JWT ERROR:", error.name, "-", error.message);
    return res.status(401).json({
      msg: "Token Invalid or Expired",
    });
  }
};

export default authenticate;
