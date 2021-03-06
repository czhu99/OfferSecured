const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },

  industry: {
    type: String,
  },

  yoe: {
    type: Number,
  },

  role: {
    type: String,
  },

  resume: {
    type: String,
  },

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;