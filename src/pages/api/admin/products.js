import connectDB from "@/config/connectDB";
import Product from "@/models/Products";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  await connectDB();
  const newProduct = await new Product(req.body);
  const product = await newProduct.save();
  res.send({ message: "Product Created", product });
  console.log(product);
  //   res.send({ success: true, message: "seeded successfully" });
});

export default handler;
