const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamRoleSchema = new Schema({
  role: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('User role is a required field')
      }
    }
  },
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
  },
  jobId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Job ID is a required field')
      }
    }
  }
});

module.exports = mongoose.model('TeamRole', TeamRoleSchema);