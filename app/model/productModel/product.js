const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  // id, product name, product category, image url , product description
  id: {
    type: String,
    required: [true, " product id is required"],
  },
  product_name: {
    type: String,
    required: [true, "product name is required"],
  },
  product_category: {
    type: String,
    required: [true, "product category is required"],
  },
  image_url: {
    type: String,
    required: [true, "image_url is required"],
  },
  product_description: {
    type: String,
    required: [true, "product_description is required"],
  },
});
const product = mongoose.model("product", productSchema);
module.exports = product;
