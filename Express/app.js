var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + '/public/css'));

//the string text to pass in to the tweeter.js to send to twitter when the vote is ready
var tweetProposals = [];

app.use('/', routes);

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});