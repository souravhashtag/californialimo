const express = require("express");
const faqController = require("../../controllers/front/FaqController");
const router = express.Router();

router.get('/', faqController.getAllFaqs);


module.exports = router;
