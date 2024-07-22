const GetAllUser = (req, res) => {
  req.status(200).json({ message: "Obter todos os Usuarios" });
};

const getUser = (req, res) => {
  res.status(200).json({
    message: `Obter Usuario ${req.params.id}`,
  });
};

const createUser = (req, res) => {
  res
    .status(201)
    .json({ message: "Usuario criado com sucesso!", data: req.body });
};
