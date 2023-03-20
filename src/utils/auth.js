import jwt from "jsonwebtoken";
import axios from "axios";

const signToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20d",
  });
};

// Set authentication client
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;

const isAuth = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    if (!token)
      return res
        .status(401)
        .json({ success: false, message: "Access token not found" });

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.userId = decoded.userId;

      next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({ success: false, message: "Invalid token" });
    }
  }
};

export { signToken, isAuth, setAuthToken };
