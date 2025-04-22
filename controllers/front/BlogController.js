const Blog = require("../../models/Blog");
class BlogController {
  // Static middleware for token verification

  static list = async (req, res) => {
    try {
      const blogs = await Blog.find().populate("author", "username email");
      const baseUrl = `${req.protocol}://${req.get("host")}/uploads/`;
      const blogsWithFullBanner = blogs.map(blog => ({
        ...blog.toObject(),
        banner: blog.banner ? baseUrl + blog.banner : null
      }));
      res.status(200).json(blogsWithFullBanner);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Update a blog

  static getSingleBlog = async (req, res) => {
      try {
        const blog = await Blog.findOne({ blogurl: req.params.url });
        // const blog = await Blog.findById(req.params.id);
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

}

module.exports = BlogController;
