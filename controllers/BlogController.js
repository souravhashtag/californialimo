const jwt = require("jsonwebtoken");
const Blog = require("../models/Blog");
const multer = require("multer");
class BlogController {
  // Static middleware for token verification
  static verifyToken = async (req, res, next) => {
    try {
      const token = req.headers["authorization"];
      if (!token) {
        return res.status(403).json({ error: "Access denied, no token provided" });
      }

      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ error: "Invalid or expired token" });
    }
  };

  // Create a new blog
  static create = async (req, res) => {
    try {
      const { 
        title,
        shortdescription,
        content,
        blogdate,
        blogplace,
        blogurl,
        metatitle,
        metadescription,
        canonical,
        metakeyword,
        bannerurl,
        category
       } = req.body;
      const bannerimage = req.file ? req.file.filename : null;
      const blog = new Blog({
        title,
        shortdescription,
        content,
        blogdate,
        blogplace,
        blogurl,
        metatitle,
        metadescription,
        canonical,
        metakeyword,
        category,
        bannerurl,
        banner:bannerimage,
        author: req.user.id,
      });

      const savedBlog = await blog.save();
      res.status(200).json(savedBlog);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  // List all blogs
  static list = async (req, res) => {
    try {
      const blogs = await Blog.find().populate("author", "username email").sort({blogDate:-1});
      res.status(200).json(blogs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Update a blog
  static update = async (req, res) => {
    try {
      const blogId = req.params.id;
  
      const {
        title,
        shortdescription,
        content,
        blogdate,
        blogplace,
        blogurl,
        metatitle,
        metadescription,
        canonical,
        metakeyword,
        bannerurl,
        category
      } = req.body;
  
      const bannerimage = req.file ? req.file.filename : null;
  
      // Build the update object dynamically
      const updateData = {
        title,
        shortdescription,
        content,
        blogdate,
        blogplace,
        blogurl,
        metatitle,
        metadescription,
        canonical,
        metakeyword,
        category,
        bannerurl,
        author: req.user.id,
      };
  
      // Only update banner if a new file is uploaded
      if (bannerimage) {
        updateData.banner = bannerimage;
      }
  
      const updatedBlog = await Blog.findByIdAndUpdate(blogId, updateData, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }
  
      res.status(200).json(updatedBlog);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  static getSingleBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      // Add base URL for banner
      const baseUrl = `${req.protocol}://${req.get("host")}/uploads/`;
      const blogWithFullBanner = {
        ...blog._doc,
        banner: blog.banner ? baseUrl + blog.banner : null,
      };
  
      res.status(200).json(blogWithFullBanner);
    } catch (error) {
      console.error("Error fetching single blog:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  static deleteBlog = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleted = await Blog.findByIdAndDelete(id); // or your DB logic
  
      if (!deleted) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      console.error("DELETE Error:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
}

module.exports = BlogController;
