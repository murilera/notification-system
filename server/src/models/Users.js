const mongoose = require('mongoose');
const category = require('./Categories')
const channels = require('./Channels')


const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  phone: {
    type: String,
    required: [true, 'phone is required'],
  },
  channels: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channels"
  },
  subscribes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories"
  },
  createdat: {
    default: Date.now,
    type: Date,
  }
});

UsersSchema.set('toJSON', { virtuals: true, });

const Users = mongoose.models.Users || mongoose.model('Users', UsersSchema);

module.exports = {
  Users
}