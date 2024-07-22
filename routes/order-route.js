const express = require("express");
import {
  getOrders,

} from "../controllers/order-controller";

const router = express.Router();

router.get("/orders", getOrders);
router.post("/orders", createOrder);
router.patch("/orders/:id", updateOrderName);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

export default router;
