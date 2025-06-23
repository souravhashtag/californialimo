const express = require("express");
const AuthController = require("../controllers/AuthController");
const BlogController = require("../controllers/BlogController");

const router = express.Router();

// Routes
router.post("/refresh-token", AuthController.refreshToken);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
// router.get("/account", BlogController.verifyToken, AuthController.getAccount);
// router.post("/company", BlogController.verifyToken, AuthController.postCompanyDetails);
router.get("/company", BlogController.verifyToken, AuthController.getCompany);
router.put("/update", BlogController.verifyToken, AuthController.updateUserAndCompany);

module.exports = router;
