const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

/* Settings */
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

/* Routes */
	app.get('/', (req, res) => {
		res.redirect('/api');
	});

	app.get('/api', (req, res) => {
		res.send('API Educandonos');
	});

	

/* Port Conf */
	const PORT = process.env.PORT || 3000;

	app.listen(PORT, () => {
		console.log(`Server runing on port ${PORT}`);
	});