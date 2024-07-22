const getAllCustomers = (req, res) => {
  res.status(200).json({ message: "Ver todos os clientes da loja" });
};

const getCustomer = (req, res) => {
  const { id } = req.params; 
  const { nome, email } = req.query; 

  if (nome) {
      res.status(200).json({
          message: `Buscar cliente por nome: ${nome}`,
      });
  } else if (email) {
      res.status(200).json({
          message: `Buscar cliente por email: ${email}`,
      });
  } else {
      res.status(200).json({
          message: `Ver um cliente específico com ID: ${id}`,
      });
  }
};

const createCustomer = (req, res) => {
  const { name, email, contacto, dataNascimento, endereco, notas} = req.body
   res.status(200).json({
       message: "Cliente cadastrado com sucesso!", 
       data: {
        name,
        email,
        dataNascimento,
        contacto,
        endereco,
        notas,
      }
  });
};

const updateCustomer = (req, res) => {
  const { name, email, contacto, endereco, dataNascimento} = req.body
  res.status(200).json({
      message: "Cliente atualizado com sucesso!",
      data: {
          name,
          email,
          contacto,
          dataNascimento,
          endereco,
      }
  });
};
const deleteCustomer = (req, res) => {
  const { name, email, contacto} = req.body
  res.status(200).json({
       message: `O Cliente foi excluido com sucesso ${req.params.id}`, });
};

module.exports = { getAllCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer };




