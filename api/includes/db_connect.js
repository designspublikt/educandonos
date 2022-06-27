const mysql = require('mysql2');

let db = mysql.createPool({
	host: '200.58.111.18',
	user: 'c2461178_educdb',
	password: 'ttn47QszLr5goPyeZ13Ogw1m',
	database: ' c2461178_edudb'
});

db.getConnection((err, con) => {
	if(err) {
		console.log(err);
		return;
	}

	con.release();
	console.log('DB Connected');
});

module.exports = db;