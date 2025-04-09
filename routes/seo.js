const express = require("express");
const BlogController = require("../controllers/BlogController");
const SeoController = require("../controllers/SeoController");
const router = express.Router();


router.get("/list", BlogController.verifyToken, SeoController.list);
router.post("/add", BlogController.verifyToken, SeoController.add);
router.get("/:id", BlogController.verifyToken, SeoController.details);
router.post("/:id", BlogController.verifyToken, SeoController.update);


module.exports = router;
