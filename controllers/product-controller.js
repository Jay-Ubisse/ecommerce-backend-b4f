const asyncHandler = require ("express-async-handler");
const Product = require("../models/produts-model");



const getAllProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ message: "Todos Produtos", data: products });
});

const getProduct = (req, res) => {

  res.status(200).json({ message: `Produto ${req.params.id}  encontrado` })
};


const createProduct = asyncHandler(async(req, res) => {
  const createProduct = await Product.create({
    title: req.body.title,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    quantityStock: req.body.quantityStock,
    description: req.body.description,
  });

  res.status(200).json({
    message: "Producto criado com sucesso!",
    data: createProduct,
  });
});


const updateProduct = (req, res) => {

  const id = request.params.id
  const { name, category, price, description } = req.body

  req.status(200).json({ message: 'Product updated' })
};


const deleteProduct = (req, res) => {
  res.status(200).json({ message: `Eliminar um producto com id ${req.params.id}` });
};


module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct }