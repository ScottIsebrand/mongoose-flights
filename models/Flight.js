const mongoose = require('mongoose');

// Mongoose Flight Schema
const flightSchema = new mongoose.Schema({
  airline: { type: String, enum: ['American', 'Southwest', 'United'] },
  flightNo: { type: Number, min: 10, max: 9999, required: true },
  departs: { type: Date },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
