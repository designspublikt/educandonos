const con = require('../includes/db_connect');
const bcrypt = require('bcryptjs');

class Auth {
	username = '';
	password = '';

	login() {
		return new Promise((resolve, reject) => {
			let passwordHsh = '';
		});
	}
}