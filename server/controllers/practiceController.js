var PracticeSession = require('../models/PracticeSession.js');

// Create controller methods

exports.default = function(req, res) {
  res.sendfile('./client/index.html');
}

// you coudl use next here but we aren't since it's the only middleware in the sequence
exports.createSession = function(req, res) {
  var newPracticeSession = req.body;
  PracticeSession.create(newPracticeSession, function(err, newPracticeSession){
    if (err) {
      return res.json(err);
    }
    res.json(newPracticeSession);
  });

};

exports.getAll = function(req, res) {
  PracticeSession.find({}, function(err, allSessions) {
    if (err) {
      return res.json(err);
    }
    // there's a circular reference here
    // console.log('All sessions in server controller getAll: ', res.json(allSessions));
    res.json(allSessions);
  });
};