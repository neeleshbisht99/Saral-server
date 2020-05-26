const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');
const markerSchema = new mongoose.Schema({
  lat: {
    type: Double,
    default: 21,
  },
  lng: {
    type: Double,
    default: 21,
  },
  country: {
    type: String,
    default: 'India',
  },
});

module.exports = mongoose.model('Prime', markerSchema);
