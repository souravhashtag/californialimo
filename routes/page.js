const express = require("express");
const BlogController = require("../controllers/BlogController");
const PageController = require("../controllers/PageController");
const upload = require("../config/multer-multiple");
const router = express.Router();

// Blog Routes
//router.post("/add", BlogController.verifyToken,upload.array("images",10), GalleryController.create);
router.get("/list", BlogController.verifyToken, PageController.list);
router.get("/:pageslug", BlogController.verifyToken, PageController.getPageDetails);
router.post("/:pageslug", BlogController.verifyToken, PageController.updatePageDetails);
//router.delete("/delete/:id", BlogController.verifyToken, GalleryController.delete);

module.exports = router;
