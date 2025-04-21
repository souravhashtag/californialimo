const FAQ = require('../models/Faq');

const getAllFaqs = async (req, res) => {
  try {
    const faqs = await FAQ.find({});
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQs', error: error.message });
  }
};

const getFaqById = async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id);
    
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    
    res.status(200).json(faq);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQ', error: error.message });
  }
};

const createFaq = async (req, res) => {
  try {
    const { question, answer, isPublished } = req.body;
    
    const newFaq = new FAQ({
      question,
      answer,
      isPublished
    });
    
    const savedFaq = await newFaq.save();
    res.status(201).json(savedFaq);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: error.message });
    }
    res.status(500).json({ message: 'Error creating FAQ', error: error.message });
  }
};

const updateFaq = async (req, res) => {
  try {
    // const { question, answer, isPublished } = req.body;
    
    const updatedFaq = await FAQ.findByIdAndUpdate(
      req.params.id,
      req.body ,
      { new: true, runValidators: true }
    );
    
    if (!updatedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    
    res.status(200).json(updatedFaq);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: error.message });
    }
    res.status(500).json({ message: 'Error updating FAQ', error: error.message });
  }
};

const deleteFaq = async (req, res) => {
  try {
    const deletedFaq = await FAQ.findByIdAndDelete(req.params.id);
    
    if (!deletedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    
    res.status(200).json({ message: 'FAQ deleted successfully', deletedFaq });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting FAQ', error: error.message });
  }
};

// Search FAQs
const searchFaqs = async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }
    
    const faqs = await FAQ.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } }
    ).sort({ score: { $meta: 'textScore' } });
    
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Error searching FAQs', error: error.message });
  }
};



module.exports = {
  getAllFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
  searchFaqs
};