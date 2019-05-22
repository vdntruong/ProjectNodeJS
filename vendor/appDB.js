const dbconfig = require('../config/database');
class DB {
	constructor() {
		this.conn = null;
		this.drive = dbconfig.drive;
		this.config = dbconfig.connections.filter((connecConfig) => connecConfig.name == this.drive)[0];
		if (this.drive != '' && this.config != null) this.createConn();
	}
	createConn() {
		switch (this.drive) {
			case 'mssql':
				break;
			case 'mongodb':
				break;
			default:
				break;
		}
	}
}

module.exports = new DB();
