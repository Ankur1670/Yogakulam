const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  program: { type: String, required: true },
  year: { type: String, required: true },
  month: { type: String, required: true },
  accommodation: { type: String, required: true },
  experience: { type: String, required: true },
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
