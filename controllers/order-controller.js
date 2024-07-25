const express = require("express");

const getOrders = (req, res) => {
  res.json({
    msg: "todos os pedidos foram retornados",
  });
};

const getOrderById = (req, res) => {
  const { id } = req.params; 
  res.json({ msg: `Pedido com ID ${req.params.id} foi retornado` });
};

const createOrder = (req, res) => {
  const { name, price, qty, brand } = req.body;
  res.json({ msg: "Novo pedido foi criado com sucesso" });
};

const updateOrder = (req, res) => {
  const { id } = req.params; 
  const { name, price, qty, brand } = req.body;
  res.json({ msg: `Pedido com ID ${req.params.id} foi atualizado com sucesso` });
};

const updateOrderName = (req, res) => {
  const { id } = req.params; 
  res.json({ msg: `Nome do pedido com ID ${req.params.id} foi alterado` });
};

const deleteOrder = (req, res) => {
  const { id } = req.params; 
  res.json({ msg: `Pedido com ID ${req.params.id} foi excluído com sucesso` });
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  updateOrderName,
  deleteOrder,
};
