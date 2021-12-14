const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queueSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  
  queue: {
      type: Array,
      required: true,
  }

}, {
  timestamps: true,
});

const Queue = mongoose.model('Queue', queueSchema);

module.exports = Queue;