const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  stock: { type: Number, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  created: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Product", productSchema);
