const asyncHandler = require ("express-async-handler");
const Product = require("../models/produts-model");



const getAllProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ message: "Todos Produtos", data: products });
});

const getProduct = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Obter produto ${req.params.id}`,
  });
});



const createProduct = (req, res) => {
  const { name, category, price, description } = req.body

  req.status(201).json({ message: 'Product created' })
};


const updateProduct = (req, res) => {

  const id = request.params.id
  const { name, category, price, description } = req.body

  req.status(200).json({ message: 'Product updated' })
};


const deleteProduct = (req, res) => {
  res.status(200).json({ message: `Eliminar um producto com id ${req.params.id}` });
};


module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct }