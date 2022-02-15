const db = require("../models");

//create main model
const Product = db.productModel;
const Review = db.reviewModel;

// 1. create product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
};

// 2. get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};

// 3. get single products

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let products = await Product.findOne({ where: { id: id } });
  res.status(200).send(products);
};

// 4. update products -> postman 에서 method 를 put으로 두면 된다.

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.updateProducts(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// 5. delete products by id

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("product is deleted");
};

// 6. get published product

const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
};
