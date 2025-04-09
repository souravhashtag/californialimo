const mongoose = require("mongoose");

const SeoSchema = new mongoose.Schema({
  page: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Page", unique: true },
  title: { type: String },
  description: { type: String},
  keyword: { type: String},
  canonical: { type: String, default: ""},
},{
    timestamps:true
});



module.exports = mongoose.model("Seo", SeoSchema);
