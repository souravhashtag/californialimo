const express = require("express");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

// Routes
router.post("/refresh-token", AuthController.refreshToken);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

module.exports = router;
