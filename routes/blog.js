const express = require("express");
const BlogController = require("../controllers/BlogController");
const upload = require("../config/multer")
const router = express.Router();

// Blog Routes
router.post("/create", upload.single("bannerimage"), BlogController.verifyToken, BlogController.create);
router.get("/list", BlogController.verifyToken, BlogController.list);
router.post("/update/:id", BlogController.verifyToken, upload.single("bannerimage"), BlogController.update);
router.get("/blog-details/:id", BlogController.verifyToken, BlogController.getSingleBlog);
router.delete('/:id', BlogController.verifyToken, BlogController.deleteBlog);

module.exports = router;
