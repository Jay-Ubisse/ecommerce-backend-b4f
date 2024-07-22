const express = require("express");

const router = express.Router();

const { getAllUser,getUser ,createUser,deleteUser,  updateUser} = require("../controllers/user-controller");



router.get("/", getAllUser);

router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id",deleteUser)

router.put("/:id", updateUser);

module.exports = router;