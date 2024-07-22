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
