const express = require("express");
const { GetAllUser } = require("../controllers/user-controller");
const router = express.Router();
router.get("/", GetAllUser);
