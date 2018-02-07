const path = require('path');

module.exports = function(app) {

	// Connects to survey page
	app.get('/survey', function(req, resp) {
		resp.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// Connects to home page
	app.get('/', function(req, resp) {
		resp.sendFile(path.join(__dirname + "/../public/home.html"));
	});
}