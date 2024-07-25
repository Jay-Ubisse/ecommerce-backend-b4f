const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order-controller");

router.get("/orders", orderController.getOrders);
router.get("/orders/:id", orderController.getOrderById);
router.post("/orders", orderController.createOrder);
router.patch("/orders/:id", orderController.updateOrderName);
router.put("/orders/:id", orderController.updateOrder);
router.delete("/orders/:id", orderController.deleteOrder);

module.exports = router;
