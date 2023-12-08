const express = require("express");
const routes = express.Router();
const productController = require("../app/controller/productController/productController");
routes.post("/add_product", productController.addProduct);
routes.get("/get_product/:id", productController.getById);
routes.get("/all_products", productController.getAllProducts);
routes.delete("/delete_product/:id", productController.deleteById);
module.exports = routes;
