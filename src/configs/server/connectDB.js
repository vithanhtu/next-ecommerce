import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      autoIndex: false,
    });

    console.log("Connect DB is successfully!!");
  } catch (error) {
    console.log(error);
    console.log("Connect DB is fail!!");
  }
};

export default connectDB;
