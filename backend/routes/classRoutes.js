// routes/classRoutes.js
const express = require('express');
const router = express.Router();
const Class = require('../models/Class'); // Your class model
const auth = require('../middleware/authMiddleware'); // Authentication middleware

// @route   GET /api/classes
// @desc    Get all classes
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   POST /api/classes
// @desc    Create a new class
// @access  Private
router.post('/', auth, async (req, res) => {
  const { name, description, schedule } = req.body;

  try {
    const newClass = new Class({ name, description, schedule });
    await newClass.save();
    res.json(newClass);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// More routes for updating and deleting classes
