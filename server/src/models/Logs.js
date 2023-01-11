const mongoose = require('mongoose');

const LogsSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
  createdat: {
    default: Date.now,
    type: Date,
  }
});

const Logs = mongoose.models.Logs || mongoose.model('Logs', LogsSchema);

module.exports = {
  Logs
}