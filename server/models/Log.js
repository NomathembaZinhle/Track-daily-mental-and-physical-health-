const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  userId: String,
  date: String,
  mood: String,
  sleepHours: Number,
  exerciseMinutes: Number,
  waterIntake: Number,
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model('Log', logSchema);
