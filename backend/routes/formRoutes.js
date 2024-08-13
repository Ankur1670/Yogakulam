// backend/routes/formRoutes.js
const express = require('express');
const router = express.Router();
const Form = require('../models/form.js');

// @route   POST /api/form
// @desc    Submit form data
// @access  Public
router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: 'Please enter your email' });
  }

  try {
    const newForm = new Form({ email });
    await newForm.save();
    res.json({ msg: 'Form submitted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
