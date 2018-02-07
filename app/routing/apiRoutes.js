// Modules

var friendData = require('../data/friends');

module.exports = function(app) {

	// Display friend JSON
	app.get('/api/friends', function(req, res) {
		res.json(friendData);
	});

	app.post('/api/friends', function(req, res) {

		// Pushes new data to friend JSOn in JSON format
		friendData.push(req.body);
		console.log(friendData);

		// Displays it for the user when posted
		res.json(friendData);
	});
}