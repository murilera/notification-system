const mongoose = require('mongoose');

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
    type: [String],
    required: true,
    values: ['SMS', 'Email', 'Push'],
    message: '{VALUE} is not supported at the moment'
  },
  subscribes: {
    type: [String],
    required: true,
    enum: {
      values: ['Sports', 'Finance', 'Movies'],
      message: '{VALUE} is not supported at the moment'
    }
  },
  createdat: {
    default: Date.now,
    type: Date,
  }
});

UsersSchema.set('toJSON', { virtuals: true, });

const Users = mongoose.models.Users || mongoose.model('Users', UsersSchema);

module.exports = Users
