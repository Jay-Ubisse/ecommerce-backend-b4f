const express = require("express");
const {
  getAllCustomers,
  getCustomer,
  deleteCustomer,
  createCustomer,
  updateCustomer,
} = require("../controllers/customer-controllers");
const router = express.Router();

router.get("/", getAllCustomers);

router.get("/:id", getCustomer);

router.post("/", createCustomer);

router.put("/:id", updateCustomer);

router.delete("/:id", deleteCustomer);

module.exports = router;
