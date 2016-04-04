var practiceRouter = require('express').Router();
var practiceController = require('../controllers/practiceController.js');

// Declare routes for our resource endpoints and specify what controller method 
// to use for each
practiceRouter.route('/')
  .post(practiceController.createSession)
  .get(practiceController.retrieveAllSesssions);
  // .put(practiceController.updateAll);


// TODO: Implement filters based on time scales (day/month/year)
//practiceRouter.route('/month')
  //.get(practiceController.retrieveOne);
  // .put(practiceController.updateOne);
  // .delete(practiceController.kill);

module.exports = practiceRouter;
