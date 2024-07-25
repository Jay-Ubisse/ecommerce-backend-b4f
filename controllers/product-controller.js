const asyncHandler = require ("express-async-handler");
const Product = require("../models/produts-model");



const getAllProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products );
});

const getProduct = asyncHandler(async (req, res) => {
  const {id} = req.params
  const product = await Product.findById(id);

  res.status(200).json( product );
});


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