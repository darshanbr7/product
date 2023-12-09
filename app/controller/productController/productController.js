const product = require("../../model/productModel/product");
const productController = {};

productController.addProduct = (req, res) => {
  //  reciving a  data from the request and assigning all data  to a variable
  const body = req.body;
  const newProduct = new product(body);
  newProduct
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.json({
        error: e,
      });
    });
};

productController.getById = (req, res) => {
  // reciving  a id from the params
  const id = req.params.id;
  product
    .findOne({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.json({
        error: e,
      });
    });
};

productController.deleteById = (req, res) => {
  // reciving  a id from the params
  const id = req.params.id;
  product
    .findOneAndDelete({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.json({
        error: e,
      });
    });
};

productController.getAllProducts = async (req, res) => {
  try {
    // Extracting filters and pagination parameters from the request query
    const { page = 1, pageSize = 10, productName, category } = req.query;

    // Building the filter object based on the provided parameters
    const filter = {};
    if (productName) {
      filter.product_name = { $regex: new RegExp(productName, "i") };
    }
    if (category) {
      filter.product_category = { $regex: new RegExp(category, "i") };
    }

    // Calculating skip value for pagination
    const skip = (page - 1) * pageSize;

    // Fetching products based on filters and applying pagination
    const products = await product
      .find(filter)
      .skip(skip)
      .limit(Number(pageSize));

    // Counting total number of products without pagination
    const totalProducts = await product.countDocuments(filter);

    // Sending the response with products and pagination details
    res.json({
      products,
      currentPage: Number(page),
      pageSize: Number(pageSize),
      totalProducts,
      totalPages: Math.ceil(totalProducts / pageSize),
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = productController;
