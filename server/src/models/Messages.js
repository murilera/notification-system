const mongoose = require('mongoose');
const category = require('./Categories')

const MessagesSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories"
  },
});

const Messages = mongoose.models.Messages || mongoose.model('Messages', MessagesSchema);

module.exports = {
  Messages
}