var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); // delete if not needed later
var app = express();

var port = process.env.PORT || 4568;
var dbUri = process.env.MONGOLAB_URI || 'mongodb://localhost/mvp';
// config files
//var db = require('./config/db');


var practiceRouter = require('./routers/practiceRouter');

mongoose.connect(dbUri);
// TODO: learn difference between above and below
// mongoose.connect(db.url); 

// body parser just grabs all the response request stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
// TODO: check if useful
//app.use(methodOverride('X-HTTP-Method-Override')); 

// Use this to test initial server, then delete
app.get('/', function(req, res) {
  res.json({message: 'Example response message on get /'});
});

// serve up static files
app.use(express.static(__dirname + '/client')); 

app.use('/', practiceRouter);

app.listen(port, function(err) {
  if (err) {
    return console.log('Listen error: ', err);
  }
  console.log('MVP Meditation Tracker listening on ' + port);
});  

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)

module.exports = app;


// routes ==================================================
//require('./app/routes')(app); // configure our routes
              
