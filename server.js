// Modules

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 3000;

// Middleware that parses the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/public'));

// Require routes
// App is passed in because it lets us use express in other files
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Listens for when page is loaded and starts server
app.listen(PORT, function() {
	console.log('Listening for App', PORT);
});