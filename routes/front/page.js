const express = require("express");
const PageController = require("../../controllers/front/PageController");
const router = express.Router();

router.get("/page/:pageslug", PageController.getPageDetails);

module.exports = router;
