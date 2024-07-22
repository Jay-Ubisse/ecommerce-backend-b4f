const express = require("express");

const router = express.Router();

const { getAllUser,getUser ,createUser,} = require("../controllers/user-controller");



router.get("/", getAllUser);

router.get("/:id", getUser);

router.post("/", createUser);

module.exports = router;