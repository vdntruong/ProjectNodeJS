var mysql = require('mysql');
var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
});
class BaseModel {
	static async executeStm(query) {
		return new Promise((resolve, reject) => {
			conn.query(query, (er, rs) => {
				if (er) return reject(er);
				resolve(rs);
			});
		});
	}
	static async insert(params) {
		return new Promise((resolve, reject) => {
			conn.query('insert into ' + this.name + ' set ?', params, (er, rs) => {
				if (er) return reject(er);
				// resolve(rs.insertId);
				resolve(rs);
			});
		});
	}
	static async update(params) {
		return new Promise((resolve, reject) => {
			conn.query('update ' + this.name + ' set ? where ?', params, (er, rs) => {
				if (er) return reject(er);
				// resolve(rs.changedRows);
				resolve(rs);
			});
		});
	}
	static async delete(params) {
		return new Promise((resolve, reject) => {
			conn.query('delete from ' + this.name + ' where ?', params, (er, rs) => {
				if (er) return reject(er);
				// resolve(rs.affectedRows);
				resolve(rs);
			});
		});
	}
	static async getAll() {
		return new Promise((resolve, reject) => {
			conn.query('select * from ' + this.name, (er, rs, fl) => {
				if (er) return reject(er);
				// console.log(fl);
				resolve(rs);
			});
		});
	}
	static async getByParams(params) {
		return new Promise((resolve, reject) => {
			conn.query('select * from ' + this.name + ' where ?', params, (er, rs) => {
				if (er) return reject(er);
				resolve(rs);
			});
		});
	}
}
class yeah extends BaseModel {}

// yeah.getAll().then((data) => console.log(data)).catch((er) => console.log('er', er));
