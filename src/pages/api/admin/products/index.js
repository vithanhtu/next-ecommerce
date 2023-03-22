import connectDB from "@/configs/server/connectDB";
import Product from "@/models/Products";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  await connectDB();
  const newProduct = await new Product(req.body);
  const product = await newProduct.save();
  res.send({ success: true, message: "Product Created", product });
});

export default handler;
