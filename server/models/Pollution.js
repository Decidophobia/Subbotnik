const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollutionSchema = Schema({
  authorID: { type: Schema.Types.ObjectId, ref: 'User' },
  coord: { type: Number, required: true },
  adress: { type: String },
  district: { type: String },
  description: { type: String },
  photo: { type: String },
  status: { type: Boolean },
});

module.exports = mongoose.model('Pollution', pollutionSchema);
