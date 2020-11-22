const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollutionSchema = Schema({
  authorID: { type: Schema.Types.ObjectId, ref: 'User' },
  coord: { type: Number },
  description: { type: String },
  photo: { type: String },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model('Pollution', pollutionSchema);
