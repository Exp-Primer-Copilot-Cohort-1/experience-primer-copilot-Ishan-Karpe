// Create a web server for comment

var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

var COMMENTS_FILE = __dirname + '/comments.json';

// Get all comments
app.get('/api/comments', function(req, res) {
	fs.readFile(COMMENTS_FILE, function(err, data) {
		if(err) {
			console.error(err);
			process.exit(1);
		}
		res.setHeader('Content-Type', 'application/json');
		res.send(data);
	});
});

// Post a new comment
app.post('/api/comments', function(req, res) {
	fs.readFile(COMMENTS_FILE, function(err, data) {
		if(err) {
			console.error(err);
			process.exit(1);
		}
		var comments = JSON.parse(data);})});