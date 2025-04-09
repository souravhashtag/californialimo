const express = require("express");
const BlogController = require("../../controllers/front/BlogController");
const router = express.Router();

// Blog Routes
router.get("/", BlogController.list);
router.get("/:url", BlogController.getSingleBlog);


module.exports = router;
