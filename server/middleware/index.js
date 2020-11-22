module.exports = function (app) {

	const express = require('express');
	const morgan = require('morgan');
	const passport = require('passport');
	const cors = require('cors');

	const authRoute = require('../routes/auth');
	const pollutionRoute = require('../routes/pollution');

	// app.use(cors());
	app.use(passport.initialize());
	require('../middleware/passport')(passport);

	app.use(morgan('dev'));
	app.use(express.urlencoded({extended: true}));
	app.use(express.json());


// routes
	app.use('/auth', authRoute);
	app.use('/pollution', pollutionRoute);
};
