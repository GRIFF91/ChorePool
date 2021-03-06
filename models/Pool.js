const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const poolSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please supply a Pool name'
  },
  description: {
    type: String,
    trim: true
  },
  chores: [ String ],
  reward: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Pool', poolSchema);