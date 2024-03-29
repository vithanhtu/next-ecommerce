import connectDB from "@/configs/server/connectDB";
import Order from "@/models/Order";
import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  await connectDB();
  const orders = await Order.find({}).sort({ createdAt: -1 });

  res.send({ success: true, orders });
});

export default handler;
