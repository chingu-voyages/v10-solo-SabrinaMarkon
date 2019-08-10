const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  email: String,
  firstname: String,
  lastname: String,
  street: String,
  city: String,
  state: String,
  country: String,
  zip: String,
  phone: String,
  joined: Date
});

module.exports = mongoose.model('User', userSchema);
