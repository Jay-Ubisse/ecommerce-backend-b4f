const express = require("express");

export const getOrders = (req, res) => {
  res.json({
    msg: "todos os pedidos foram retornados",
  });
};

