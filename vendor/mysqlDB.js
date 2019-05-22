'use strict';

const mysql = require('mysql');
class mysqlDB {
	constructor(host, user, password, database) {
		this.conn = mysql.createConnection({ host, user, password, database });
		this.conn.connect((er) => {
			if (er) throw er;
		});
	}
	closeConn() {
		this.conn.end((er) => console.log(er));
	}
	show() {
		console.log('this.conn :', this.conn);
	}
}

module.exports = mysqlDB;
