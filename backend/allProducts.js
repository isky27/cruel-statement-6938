const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    // id:mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    image_url: String,
    rating: Number,
    price: Number,
    quantity: Number,
  },
  {
    collection: "prodInfo",
  }
);
mongoose.model("prodInfo", productSchema);
