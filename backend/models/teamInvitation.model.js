const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamInvitationSchema = new Schema({
  invitedByUserId: {
    type: String,
    required: true,
    validate(value) {
      if(!value) {
        new Error('The inviting user ID is a required field')
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
  invitationDate: {
    type: Date,
    default: Date.now
  },
  invitationAccepted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('TeamInvitation', teamInvitationSchema);