const express = require('express');
const router = express.Router();
const companyDetails = require('../../models/companyDetails');


router.get('/', async (req, res) => {
  try {
    const company = await companyDetails.findOne();
    if (!company) return res.status(404).json({ message: 'Company details not found' });

    res.status(200).json({ company });
  } catch (err) {
    console.error('Error fetching company details:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;