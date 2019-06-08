'use strict';
const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const drive = dbconfig.drive,
	config = dbconfig.connections.filter((connecConfig) => connecConfig.name == drive)[0];

module.exports = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	dialect: drive,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});
