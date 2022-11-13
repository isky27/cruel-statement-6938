const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    product_id: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    collection: "cart",
  }
);
mongoose.model("cart", cartSchema);
