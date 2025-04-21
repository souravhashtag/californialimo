const express = require("express");
const faqController = require("../controllers/FaqController");
const router = express.Router();

router.get('/', faqController.getAllFaqs);
router.get('/search', faqController.searchFaqs);
router.get('/:id', faqController.getFaqById);
router.post('/', faqController.createFaq);
router.put('/:id', faqController.updateFaq);
router.delete('/:id', faqController.deleteFaq);

module.exports = router;
