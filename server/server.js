const express = require('express');
const app = express();
const mongoose = require('mongoose');

const config = require('./middleware');
config(app);

const port = process.env.PORT || 4000;

async function startServer() {
	try {
		await mongoose.connect('mongodb://localhost/reactauth', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		app.listen(port, () => console.log(`Server has been started at ${ port } port...`));
	} catch (err) {
		console.log(err);
	}
}

startServer();

module.exports = app;
