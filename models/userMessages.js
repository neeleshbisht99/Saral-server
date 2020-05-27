const mongoose = require('mongoose');
const userMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'user',
  },
  email: {
    type: String,
    default: 'user@gmail.com',
  },
  message: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('UserMessages', userMessageSchema);
