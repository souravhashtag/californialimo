const FAQ = require('../../models/Faq');

const getAllFaqs = async (req, res) => {
  try {
    const faqs = await FAQ.find({}).sort({ _id: -1 });;
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQs', error: error.message });
  }
};





module.exports = {
  getAllFaqs
};