const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userIdTeamIdSchema = new Schema({
  userId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('User ID is a required field')
      }
    }
  },
  teamId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Team ID is a required field')
      }
    }
  }
});

module.exports = mongoose.model('userIdTeamId', userIdTeamIdSchema);
