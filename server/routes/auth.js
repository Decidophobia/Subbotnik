const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const accessTokenSecret = require('../config/keys');


// profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
	console.log(req.headers);
	res.json('Hello!!!');
});

// signup
router.post('/signup', async (req, res) => {
	console.log(req.body);
	try {
		const user = await User.findOne({email: req.body.email});
		if (!user) {
			const newUser = new User(req.body);
			await newUser.save();
			const accessToken = jwt.sign({
				email: newUser.email,
				userId: newUser._id
			}, accessTokenSecret.jwt, {expiresIn: 60 * 60});
			res.status(200).json({token: `Bearer ${ accessToken }`, name: newUser.name});
		} else {
			res.send('User already exists!');
		}
	} catch {
		res.status(404).json('Error!');
	}
});

// login
router.post('/login', async (req, res) => {
	// console.log(req.headers);
	try {
		const user = await User.findOne({email: req.body.email});
		console.log(user);
		if (user && user.email === req.body.email && user.password === req.body.password) {
			const accessToken = jwt.sign({
				email: user.email,
				userId: user._id
			}, accessTokenSecret.jwt, {expiresIn: 60 * 60});
			res.status(200).json({token: `Bearer ${ accessToken }`, name: user.name});
		} else {
			res.status(401).json({message: 'Username or password incorrect'});
		}
	} catch (err) {
		res.status(404).json('Error!');
	}
});


module.exports = router;
