// backend/routes/scheduleFormRoutes.js
const express = require('express');
const router = express.Router();
const ScheduleForm = require('../models/scheduleForm');

// @route   POST /api/schedule
// @desc    Submit schedule form data
// @access  Public
router.post('/', async (req, res) => {
  const { date, packageType } = req.body;

  if (!date || !packageType) {
    return res.status(400).json({ msg: 'Please provide both date and package type' });
  }

  try {
    const newScheduleForm = new ScheduleForm({ date, packageType });
    await newScheduleForm.save();
    res.json({ msg: 'Schedule form submitted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
