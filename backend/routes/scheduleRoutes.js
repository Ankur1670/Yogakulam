// routes/scheduleRoutes.js
const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule'); // Your schedule model
const auth = require('../middleware/authMiddleware'); // Authentication middleware

// @route   GET /api/schedules
// @desc    Get all schedules
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   POST /api/schedules
// @desc    Create a new schedule
// @access  Private
router.post('/', auth, async (req, res) => {
  const { classId, day, time } = req.body;

  try {
    const newSchedule = new Schedule({ classId, day, time });
    await newSchedule.save();
    res.json(newSchedule);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// More routes for updating and deleting schedules
