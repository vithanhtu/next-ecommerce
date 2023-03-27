import connectDB from "@/configs/server/connectDB";
import Order from "@/models/Order";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  await connectDB();
  const newOrder = await new Order(req.body);

  await newOrder.save();
  res.send({ success: true, message: "Created order success!", newOrder });
});

export default handler;
