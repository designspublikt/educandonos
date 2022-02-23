const mysql = require('mysql');

let db = mysql.createPool({
	
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