const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortdescription: { type: String },
  content: { type: String, required: true },
  blogdate: { type: Date, required: true },
  blogplace: { type: String, required: true },
  blogurl: { type: String, required: true },
  metatitle: { type: String, required: true },
  metadescription: { type: String, required: true },
  canonical: { type: String, required: true },
  metakeyword: { type: String },
  category: { type: String, required: true },
  bannerurl: { type: String, default: "" },
  banner: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
},{
timestamps:true
});

module.exports = mongoose.model("Blog", BlogSchema);
