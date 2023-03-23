import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    statusOder: { type: Number, default: 0 },
    orderItems: [
      {
        title: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, default: 0 },
      },
    ],
    shippingAddress: {
      fullName: { type: String },
      address: { type: String },
      city: { type: String },
      country: { type: String },
    },
    paymentMethod: { type: String },
    itemsPrice: { type: Number },
    shippingPrice: { type: Number },
    taxPrice: { type: Number },
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
