import Product from "@/models/Products";
import nc from "next-connect";
import connectDB from "@/configs/server/connectDB";

const hander = nc();

hander.get(async (req, res) => {
  await connectDB();
  const products = await Product.find({});
  res.send(products);
});

export default hander;
