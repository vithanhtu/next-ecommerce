import connectDB from "@/configs/server/connectDB";
import Product from "@/models/Products";
import data from "@/utils/data";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  await connectDB;
  //   await User.deleteMany();
  //   await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  return res.send({ message: "seeded successfully" });
});

export default handler;
