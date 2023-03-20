import connectDB from "@/config/connectDB";
import User from "@/models/User";
import nc from "next-connect";
import bcrypt from "bcryptjs";
import { signToken } from "@/utils/auth";

const hander = nc();

hander.post(async (req, res) => {
  await connectDB();
  const { email, password, cpassword } = req.body;

  // Simple validator
  if (!email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing email or password" });

  // confirm password
  if (password !== cpassword)
    return res
      .status(400)
      .json({ success: false, message: "Confirm password does not match!" });

  try {
    const userDulicate = await User.findOne({ email });
    if (userDulicate)
      return res
        .status(400)
        .json({ success: false, message: "User already taken!" });

    // All good
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const hashedCpassword = await bcrypt.hashSync(cpassword, salt);
    const newUser = User({
      ...req.body,
      password: hashedPassword,
      cpassword: hashedCpassword,
    });
    await newUser.save();

    // Return access token
    const accessToken = signToken(newUser);
    res.json({
      success: true,
      message: "User created successfully",
      user: newUser,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default hander;
