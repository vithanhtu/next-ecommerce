import connectDB from "@/configs/server/connectDB";
import Order from "@/models/Order";
import nc from "next-connect";

const handler = nc();

handler.patch(async (req, res) => {
  await connectDB();
  const { userId, cartItems } = req.body;
  const order = await Order.findOne({ user: userId });
  if (order) {
    await Order.findOneAndUpdate(
      { user: userId },
      { $push: { orderItems: cartItems } },
      { new: true }
    );
    return;
  } else {
    const newOrder = await new Order({
      user: userId,
      orderItems: [cartItems],
    });
    await newOrder.save();
  }

  // await newOrder.save();
  // if (order) {
  //   await Order.findOneAndUpdate(
  //     { user: userId },
  //     { $push: { orderItems: cartItems } },
  //     { new: true }
  //   );
  // } else {
  //   const newOrder = await new Order({
  //     user: userId,
  //     orderItems: [cartItems],
  //   });

  //   await newOrder.save();
  // }
  console.log(order);
  res.send({ success: true, message: "Order Created" });
});

export default handler;
