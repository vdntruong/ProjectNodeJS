'use strict';

const mssql = require('mssql');
class mssqlDB {
	constructor(server, user, password, database) {
		this.conn = mssql.ConnectionPool({ server, user, password, database });
		this.conn.connect((er) => {
			if (er) throw er;
		});
	}
	closeConn() {
		this.conn.close();
	}
	show() {
		console.log('this.conn :', this.conn);
	}
}

module.exports = mssqlDB;
