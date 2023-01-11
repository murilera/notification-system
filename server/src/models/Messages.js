const mongoose = require('mongoose');
const category = require('./Categories')

const MessagesSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ['Sports', 'Finance', 'Movies'],
      message: '{VALUE} is not supported at the moment'
    }
  },
});

const Messages = mongoose.models.Messages || mongoose.model('Messages', MessagesSchema);

module.exports = Messages