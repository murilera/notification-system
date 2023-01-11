const mongoose = require('mongoose');

const ChannelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: {
      values: ['SMS', 'Email', 'Push'],
      message: '{VALUE} is not supported at the moment'
    }
  }
});

const Channels = mongoose.models.Channels || mongoose.model('Channels', ChannelsSchema);

module.exports = Channels
