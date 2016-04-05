// This is the model of our meditation practice session

var mongoose = require('mongoose');

// creates our schema
var PracticeSchema = new mongoose.Schema({
  // TODO: implement with users
  // name: {
  //   type: String,
  //   unique: true
  // },
  minutes: Number,
  rating: Number,
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date
  }
});

// inherits from the practiceSchema
var PracticeSession = mongoose.model('PracticeSession', PracticeSchema);

module.exports = PracticeSession;