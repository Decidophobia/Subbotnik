const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = Schema({
  title: { type: String },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});
