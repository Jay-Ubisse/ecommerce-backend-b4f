const asyncHandler = require("express-async-handler");
const User = require("../models/users-models");

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: "Obter todos os Usuarios", data: users });
});

const getUser = asyncHandler ( async(req, res) => {

    const user = await User.findById(req.params.id)

    if(!user){
      res.status(404).json({message:"Usuario não encontrado"});
    }

  res.status(200).json({message: `Obter Usuario ${user}`,
  });
});


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
  const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new :true}) 


  res.status(200).json({ message: `Actualizar usuario ${updateUser}` });
});

const deleteUser = asyncHandler ( async (req,res) =>{

  const user = await User.findById(req.params.id);

  if (!user){

    res.status(404).json({message:"Usuario não encontrado"});
  }

  userDelete = User.findByIdAndDelete(req.params.id);

  res.status(200).json({message:`Usuario Eliminado ${userDelete}`});
});

module.exports = { getAllUser, getUser,  createUser,deleteUser,  updateUser };