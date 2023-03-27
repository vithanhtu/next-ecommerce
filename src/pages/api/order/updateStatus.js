import connectDB from "@/configs/server/connectDB";
import Order from "@/models/Order";
import nc from "next-connect";

const hander = nc();

hander.put(async (req, res) => {
  connectDB();
  const { orderId, statusOrder } = req.body;

  const order = await Order.findByIdAndUpdate(
    { _id: orderId },
    { status: statusOrder, isDelivered: true },
    { new: true }
  );

  res
    .status(201)
    .json({ success: true, message: "Update status order is success!", order });
});

export default hander;
