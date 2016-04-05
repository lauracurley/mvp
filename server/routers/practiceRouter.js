var practiceRouter = require('express').Router();
var practiceController = require('../controllers/practiceController.js');

// Declare routes for our resource endpoints and specify what controller method 
// to use for each
practiceRouter.route('/')
  .get(practiceController.default);

practiceRouter.route('/add-session')
  .post(practiceController.createSession);

practiceRouter.route('/sessions')
  .get(practiceController.getAll);


// TODO: Implement filters based on time scales (day/month/year)
//practiceRouter.route('/month')
  //.get(practiceController.retrieveOne);
  // .put(practiceController.updateOne);
  // .delete(practiceController.kill);

module.exports = practiceRouter;
