var mysql = require('mysql'),
	config = require('../config').database.mysql;
var pool;

module.exports = {
	getPool: function() {
		if (pool) return pool;
		pool = mysql.createPool({
			host: config.host,
			user: config.user,
			password: config.password,
			database: config.database
		});
		return pool;
	}
};
