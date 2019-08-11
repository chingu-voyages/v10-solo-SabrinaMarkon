const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Team name is a required field')
      }
    }
  },
  portfolioUrl: {
    type: String,
  },
  datecreated:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Team', teamSchema);
