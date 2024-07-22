const express = require("express");
import {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  updateOrder,
  updateOrderName,
} from "../controllers/order-controller";

const router = express.Router();


router.get("/orders", getOrders);
router.get("/orders/:id", getOrderById);
router.post("/orders", createOrder);
router.patch("/orders/:id", updateOrderName);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);



export default router;
