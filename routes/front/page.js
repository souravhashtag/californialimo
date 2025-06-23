const express = require("express");
const PageController = require("../../controllers/front/PageController");
const router = express.Router();

router.get("/page/:pageslug", PageController.getPageDetails);
router.post("/page", PageController.createPage);
router.put("/page/:id", PageController.editPage);
router.delete("/page/:id", PageController.deletePage);

module.exports = router;
