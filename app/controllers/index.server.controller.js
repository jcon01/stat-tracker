exports.render = function(req, res) {
	res.render('index', {
		title: 'Stat-Tracker',
		userFullName: req.user ? req.user.fullName : ''
	});
};