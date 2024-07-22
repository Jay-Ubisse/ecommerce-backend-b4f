const express = require("express");

const router = express.Router();

const { getAllUser,getUser ,createUser,deleteUser} = require("../controllers/user-controller");



router.get("/", getAllUser);

router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id",deleteUser)
module.exports = router;