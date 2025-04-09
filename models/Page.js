const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
    page: { type: String, required: true, unique: true  },
    pageslug: { type: String, required: true, unique: true  },
    pagedata: { type: Object },
},{
timestamps:true
});

module.exports = mongoose.model("Page", PageSchema);