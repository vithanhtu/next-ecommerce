import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    info: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, default: 0 },
    newProduct: { type: Boolean, required: true },
    desc: { type: String, require: true },
    sale: { type: Boolean, required: true },
    qty: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
