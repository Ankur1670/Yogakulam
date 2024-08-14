// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/authMiddleware'); // Import the middleware

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/form', require('./routes/formRoutes'));
app.use('/api/schedule', require('./routes/scheduleFormRoutes'));
app.use('/api/enrollments', require('./routes/enrollmentRoutes'));
app.use('/api/signup', require('./routes/userRoutes'));
app.use('/api/login', require('./routes/loginRoutes'));  // Added login route

app.use('/api/admin', authMiddleware, require('./routes/adminRoutes')); // Protect admin routes



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
