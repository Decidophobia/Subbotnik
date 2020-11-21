const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const accessTokenSecret = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: accessTokenSecret.jwt
};

module.exports = passport => {
	passport.use(
		new JwtStrategy(options, async (payload, done) => {
			try {
				const user = await User.findById(payload.userId).select('username id');

				if (user) {
					done(null, user);
				} else {
					done(null, false);
				}
			} catch (err) {
				console.log(err);
			}
		})
	);
};
