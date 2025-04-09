const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');
dotenv.config();
const authfrontmiddleware = require("./middleware/frontAuthorization");
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
const galleryRoutes = require("./routes/gallery");
const pageRoutes = require("./routes/page");
const seoRoutes = require("./routes/seo"); 

const pagefrontRoutes = require("./routes/front/page");
const blogfrontRoutes = require("./routes/front/blog");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/page", pageRoutes);
app.use("/api/seo", seoRoutes);


app.use("/api/front",authfrontmiddleware.verifyToken , pagefrontRoutes);
app.use("/api/front/blog",authfrontmiddleware.verifyToken , blogfrontRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error(err));
