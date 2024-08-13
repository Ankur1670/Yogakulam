// backend/models/scheduleForm.js
const mongoose = require('mongoose');

const ScheduleFormSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  packageType: {
    type: String,
    enum: ['private', 'shared', 'triple-shared'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ScheduleForm', ScheduleFormSchema);
