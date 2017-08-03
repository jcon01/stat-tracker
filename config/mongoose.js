const bluebird = require('bluebird');
const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {
	mongoose.Promise = bluebird;
	const db = mongoose.connect(config.db, {useMongoClient: true, /* other options */});

	require('../app/models/user.server.model');
	
	return db;
};