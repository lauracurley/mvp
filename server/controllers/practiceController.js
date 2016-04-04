var PracticeSession = require('../models/PraciceSession.js');

// Create our necessary controller methods to perform all needed CRUD actions

// you coudl use next here but we aren't since it's the only middleware in the sequence
exports.createSessions = function(req, res) {
  var newPracticeSession = req.body;
  // the mongooose create is synonmous with doing an http post, we're creating int he database
  PracticeSession.create(newPracticeSession, function(err, newPracticeSession){
    if (err) {
      return res.json(err);
    }
    res.json(newPracticeSession);
  });

};

exports.retrieveAllSessions = function(req, res) {
  PracticeSession.find({}, function(err, allSessions){
    if (err) {
      return res.json(err);
    }
    console.log(res.json(allCharacters));
    res.json(allCharacters);
  });
};