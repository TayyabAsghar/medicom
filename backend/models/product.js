import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    manufacturer: {
      name: { type: String, required: true },
      logo: { type: String, required: true },
      base: { type: String, required: true },
      description: { type: String, required: true },
    },
    form: { type: String, required: true },
    image: { type: String, required: true },
    brief: { type: String, required: true },
    price: { type: Number, required: true },
    strength: { type: Number, required: true },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    healthCondition: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
