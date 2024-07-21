



const createProduct = (req,res)=>{
  const {name,category,price,description} = req.body

  req.status(201).json({message:'Product created'})
}


const updateProduct =  (req,res)=>{
 
  const id = request.params.id
  const {name,category,price,description} = req.body

  req.status(200).json({message:'Product updated'})
}


const deleteProduct = (req, res) => {
res.status(200).json({ message: `Eliminar um producto com id ${req.params.id}` });
};




module.exports =  {createProduct,updateProduct,deleteProduct}