



const deleteProducts('/:id') = (req, res) => {
  res.status(200).json({ message: `Eliminar um producto com id ${req.params.id}` });
};