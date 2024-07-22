const express = require("express");

const { getAllUser,getUser ,createUser,} = require("../controllers/user-controller");

const router = express.Router();

router.get("/", getAllUser);

router.get("/:id", getUser);

router.post("/", createUser);

module.exports = router;