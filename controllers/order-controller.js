const express = require("express");

export const getOrders = (req, res) => {
  res.json({
    msg: "todos os pedidos foram retornados",
  });
};

export const getOrderById = (req, res) => {
  const { id } = req.params.id;
  res.json({ msg: `Pedido com ID ${req.params.id} foi retornado` });
};

export const createOrder = (req, res) => {
  const { name, price, qty, brand } = req.body;
  res.json({ msg: "Novo pedido foi criado com sucesso" });
};

export const updateOrder = (req, res) => {
  const { id } = req.params.id;
  const { name, price, qty, brand } = req.body;
  res.json({
    msg: `Pedido com ID ${req.params.id} foi atualizado com sucesso`,
  });
};

export const updateOrderName = (req, res) => {
  const { id } = req.params.id;
  res.json({ msg: `Nome do pedido com ID ${req.params.id} foi alterado` });
};

export const deleteOrder = (req, res) => {
  const { id } = req.params.id;
  res.json({ msg: `Pedido com ID ${req.params.id} foi excluído com sucesso` });
};
