const productController = require("../controllers/productController.js");

const express = require("express");
const router = express.Router();

router.post("/addProduct", productController.addProduct);

router.get("/getAllProducts", productController.getAllProducts);

router.get("/published", productController.getPublishedProduct);

router.get("/:id", productController.getOneProduct);

router.get("/:id", productController.updateProduct);

router.get("/:id", productController.deleteProduct);

module.exports = router;
