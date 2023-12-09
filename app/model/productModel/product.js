const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  // id, product name, product category, image url , product description
  productName: {
    type: String,
    required: [true, "product name is required"],
  },
  productCategory: {
    type: String,
    required: [true, "product category is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "image_url is required"],
  },
  productDescription: {
    type: String,
    required: [true, "product_description is required"],
  },
});
const product = mongoose.model("product", productSchema);
module.exports = product;
