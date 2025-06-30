import User from "../model/user.schema.js";

export const getUserName = async (req, res) => {
  try {
    const userId = req.user_id;
    if (!userId)
      return res.status(400).json({
        msg: "User ID is required",
        success: false,
      });
    const user = await User.findOne({ _id: userId });

    if (!user)
      return res.status(401).json({ msg: "Unauthorized", success: false });
    return res.status(202).json({
      user_Name: user.userName,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Faild To Get UserName", success: false });
  }
};
