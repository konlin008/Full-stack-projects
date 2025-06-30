import bcrypt from "bcrypt";
import User from "../model/user.schema.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({
        msg: "User Name And Password Required ",
      });
    }
    const user = await User.findOne({ userName });
    if (user)
      return res
        .status(400)
        .json({ msg: "User Already Exists! Please Login", success: false });
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      userName,
      password: hashedPassword,
    });

    return res.status(200).json({
      msg: "User Registerd Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Faild to Register",
    });
  }
};
export const logIn = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({
        msg: "User Name And Password Required ",
      });
    }
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({
        msg: "User Not Found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        msg: "Wrong User Name or Password",
        success: false,
      });
    }
    generateToken(res, user, `welcome ${user.userName}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Faild to Register",
    });
  }
};
