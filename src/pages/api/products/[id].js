import connectDB from "@/configs/server/connectDB";
import Product from "@/models/Products";
import nc from "next-connect";

const hander = nc();

hander.get(async (req, res) => {
  await connectDB();
  await Product.findOne(req.params);

  console.log("get product by id success!");
});

export default hander;
