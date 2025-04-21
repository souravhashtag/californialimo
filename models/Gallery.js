const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  alttag: { type: String, required: true },
  image: { type: String },
},{
timestamps:true
});

module.exports = mongoose.model("Gallery", GallerySchema);