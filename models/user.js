var getConnection = require('../db');

class User {
	getAll() {
		getConnection((err, con) => {
			if (err) return err;
			con.query('select * from yeah', (er, yeahs) => {
				if (er) return er;
				return yeahs;
			});
		});
	}
}

module.exports = User;
