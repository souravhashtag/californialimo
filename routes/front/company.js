const express = require("express");
const router = express.Router();
const CompanyController = require("../../controllers/front/CompanyController");

router.get("/", CompanyController);

module.exports = router;
