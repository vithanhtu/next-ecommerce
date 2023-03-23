import connectDB from "@/configs/server/connectDB";
import Order from "@/models/Order";
import nc from "next-connect";

const handler = nc();

handler.put(async (req, res) => {
  await connectDB();
  const order = await Order.findOne({ user: userId });

  if (order) {
    await Order.findOneAndUpdate(
      { user: userId },
      { $push: { orderItems: cartItems } },
      { new: true }
    );
  } else {
    const newOrder = await new Order({
      user: userId,
      orderItems: [cartItems],
    });

    await newOrder.save();
  }
});

export default handler;
