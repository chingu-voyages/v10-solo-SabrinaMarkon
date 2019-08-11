const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reputationUserSchema = new Schema({
  ratedBy: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Rated by userId is a required field')
      }
    } 
  },
  userId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('UserId is a required field')
      }
    }
  },
  jobId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('JobId is a required field')
      }
    } 
  },
  teamId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('teamId is a required field')
      }
    }  
  },
  rating: {
    type: Number,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Rating is a required field')
      }
    }  
  },
  comment: {
    type: String,  
  },
  publicComment: { // whether the userid receiving the rating wants the comment to show on their profile.
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('ReputationUser', reputationUserSchema);