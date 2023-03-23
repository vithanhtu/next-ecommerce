import connectDB from "@/configs/server/connectDB";
import Order from "@/models/Order";
import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  await connectDB();
  const cartItems = await Order.find({});

  res.send({ success: true, cartItems });
});

export default handler;
