const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// POST request to create a new enrollment
router.post('/', async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    res.status(201).json({ msg: 'Enrollment successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error processing request.' });
  }
});

module.exports = router;
