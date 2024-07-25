const asyncHandler = require("express-async-handler");
const User = require("../models/users-models");

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: "Obter todos os Usuarios", data: users });
});

const getUser = (req, res) => {
  res.status(200).json({message: `Obter Usuario ${req.params.id}`,
  });
};


const createUser = asyncHandler(async (req, res) => {
  const users = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  res.status(201).json({ message: "Usuario criado com sucesso!", data: users });
});


const updateUser =asyncHandler(async (req, res) => {
  const users = await User.findById(req.params.id);

  if(!users){
    res.status(404).json({message:"usuario nao encontrado"})

  }
  const updateUser = await User.findByIdAndUpdate(req.params.id,users,{new :true}) 


  res.status(200).json({ message: `Actualizar usuario ${req.params.id}` });
});

const deleteUser = (req,res) =>{
  res.status(200).json({message:`Usuario Eliminado ${req.params.id}`});
}
module.exports = { getAllUser, getUser,  createUser,deleteUser,  updateUser };