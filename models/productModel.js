const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: [true, "Product must have a name"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    image: {
      type: String,
      default: "product.jpg",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    supplier: {
      type: mongoose.Schema.ObjectId,
      ref: "Supplier",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
