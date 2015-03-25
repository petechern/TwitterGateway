var express = require('express');
var router = express.Router();

appdata = require('../data.json');

router.get('/', function(req, res) {
	res.render('index');
});

router.get('/propose', function(req, res) {
	res.render('propose');
});

router.post('/propose', function(req, res) {
	var proposal = req.body.proposal;
	appdata["proposal"].push({"author": "Pete Chern", "content": proposal, "upvote": 0, "downvote": 0});
	res.redirect('/vote');
});

router.get('/vote', function(req, res) {
	var proposal = appdata.proposal;

	res.render('vote.ejs', {"proposal": proposal} );
});

module.exports = router;
