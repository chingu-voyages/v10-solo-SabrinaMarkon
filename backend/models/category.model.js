const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Category name is a required field')
      }
    }
  }
});

module.exports = mongoose.model('Category', categorySchema);
