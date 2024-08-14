const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'dc9344914102ce694f27d2322ab243104f6afee442ab0d4a87380b7b71a151040520c5cfe7bac2052dc72db153bed4efcb21ace90cbb87865dd189d6e8ad8c1e';

// Login Route
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create a token
    if (!JWT_SECRET) {
      return res.status(500).json({ message: 'JWT_SECRET is not defined in the environment variables' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    // Respond with the token and user information
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (err) {
    console.error('Error:', err.message);  // Added more detailed logging
    res.status(500).send('Server error');
  }
});

module.exports = router;
