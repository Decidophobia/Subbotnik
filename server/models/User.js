const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userShema = Schema({
	email: { type: String, require: true },
	password: { type: String, require: true },
	avatar: String,
	bio: String,
});

module.exports = mongoose.model("User", userShema);
