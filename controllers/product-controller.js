const asyncHandler = require ("express-async-handler");
const Product = require("../models/produts-model");



const getAllProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ message: "Todos Produtos", data: products });
});

const getProduct = (req, res) => {

  res.status(200).json({ message: `Produto ${req.params.id}  encontrado` })
};


const createProduct = (req, res) => {
  const { name, category, price, description } = req.body

  req.status(201).json({ message: 'Product created' })
};


const updateProduct = (req, res) => {

  const id = request.params.id
  const { name, category, price, description } = req.body

  req.status(200).json({ message: 'Product updated' })
};


const deleteProduct = asyncHandler(async (req, res) => {

try{
  const product = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `product successfully deleted ${product}` });
}
catch(error){
  res.status(500).json({message: error})
}

});


module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct }