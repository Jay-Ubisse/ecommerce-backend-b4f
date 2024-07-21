


readProducts.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(product => product.id === productId);
  if (!product) {
      return res.status(404).send('Product not found');
  }
  res.json(product);
});

deleteProducts('/:id') = (req, res) => {
  res.status(200).json({ message: `Eliminar um producto com id ${req.params.id}` });
};