import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: Number, default: 0 },
    orderItems: [
      {
        title: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, default: 0 },
      },
    ],
    shippingAddress: {
      username: { type: String },
      address: { type: String, required: true },
      email: { type: String, required: true },
      city: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
