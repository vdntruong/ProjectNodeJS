// var mysql = require('mysql');
// var config = require(require('path').join(__dirname, '/config')).database.mysql;
// var pool = mysql.createPool({
// 	host: config.host,
// 	user: config.user,
// 	password: config.password,
// 	database: config.database
// });
// var getConnection = function(cb) {
// 	pool.getConnection(function(err, connection) {
// 		if (err) {
// 			return cb(err);
// 		}
// 		cb(null, connection);
// 	});
// };
// module.exports = getConnection;

var mysql = require('mysql'),
	config = require(require('path').join(__dirname, '/config')).database.mysql,
	conn = mysql.createConnection({
		host: config.host,
		user: config.user,
		password: config.password,
		database: config.database
	});
module.exports = conn;
