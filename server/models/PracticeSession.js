// This is the model of our meditation practice session

var mongoose = require('mongoose');

// creates our schema
var practiceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  // TODO: check if created at needs to be made explicit in mongo
  quality: Number,
  minutes: Number
});

// inherits from the practiceSchema
var PracticeSession = mongoose.model('practiceSession', practiceSchema);

module.exports = PracticeSession;