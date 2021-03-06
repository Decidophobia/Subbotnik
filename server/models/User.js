const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userShema = Schema({
	email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: {type: String, require: true},
  phone: {type: Number, require: true, unique: true},
  room: {type: Schema.Types.ObjectId, ref: 'Chat' },
  pollutionRef: [ { type: Schema.Types.ObjectId, ref: 'Pollution' }]
});

module.exports = mongoose.model("User", userShema);
