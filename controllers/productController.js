const Product = require("../models/product");

exports.getProductHome = async (req, res) => {
  try {
    const product = await Product.find();

    res.json({ product });
  } catch (error) {
    console.log(error);
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.json({ product });
  } catch (error) {
    console.log(error);
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.find().where("categoryId").equals(id);
  res.json({ product });
};

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    product.save();

    res.json({ product });
  } catch (error) {
    console.log(error);
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return res.status(400).json({ msg: "Producto no encontrado" });
  }

  product.name = req.body.name || product.name;
  product.description = req.body.description || product.description;
  product.stock = req.body.stock || product.stock;
  product.price = req.body.price || product.price;
  product.image = req.body.image || product.image;

  product.save();
  res.json({ product });
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });

    res.json({ msg: "Producto eliminado" });
  } catch (error) {
    console.log(error);
  }
};
