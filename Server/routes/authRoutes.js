
const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/auth/registerController");
const { loginUser } = require("../controllers/auth/loginController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
