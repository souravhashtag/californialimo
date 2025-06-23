const mongoose = require('mongoose');


const CompanyDetailsSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyAddress: { type: String, required: true },
  companyPhone: { type: String, required: true },
  companyEmail: { type: String, required: true },
  companyLogo: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CompanyDetails', CompanyDetailsSchema);