const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar todos os clientes', erro: error.message });
  }
};

const getCustomer = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.query;

  try {
    let customer;
    if (nome) {
      customer = await Customer.findOne({ name: nome });
    } else if (email) {
      customer = await Customer.findOne({ email: email });
    } else {
      customer = await Customer.findById(id);
    }

    if (!customer) return res.status(404).json({ mensagem: 'Cliente não encontrado' });

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar cliente', erro: error.message });
  }
};

const createCustomer = async (req, res) => {
  const { name, email, contacto, dataNascimento, endereco, notas } = req.body;

  try {
    const newCustomer = new Customer({
      name,
      email,
      contacto,
      dataNascimento,
      endereco,
      notas
    });

    await newCustomer.save();
    res.status(201).json({
      mensagem: 'Cliente cadastrado com sucesso!',
      dados: newCustomer
    });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao cadastrar cliente', erro: error.message });
  }
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, contacto, endereco, dataNascimento } = req.body;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(id, {
      name,
      email,
      contacto,
      endereco,
      dataNascimento
    }, { new: true, runValidators: true });

    if (!updatedCustomer) return res.status(404).json({ mensagem: 'Cliente não encontrado' });

    res.status(200).json({
      mensagem: 'Cliente atualizado com sucesso!',
      dados: updatedCustomer
    });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao atualizar cliente', erro: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);

    if (!deletedCustomer) return res.status(404).json({ mensagem: 'Cliente não encontrado' });

    res.status(200).json({
      mensagem: `Cliente excluído com sucesso: ${id}`,
      dados: deletedCustomer
    });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir cliente', erro: error.message });
  }
};

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
};