const express = require("express");
const BlogController = require("../controllers/BlogController");
const GalleryController = require("../controllers/GalleryController");
const upload = require("../config/multer-multiple");
const router = express.Router();

// Blog Routes
router.post("/add", BlogController.verifyToken,upload.array("images",10), GalleryController.create);
 router.get("/list", BlogController.verifyToken, GalleryController.list);
router.delete("/delete/:id", BlogController.verifyToken, GalleryController.delete);

module.exports = router;
