const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reputationTeamSchema = new Schema({
  ratedBy: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Rated by userId is a required field')
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
  publicComment: { // whether the team receiving the rating wants the comment to show on the team profile.
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('ReputationTeam', reputationTeamSchema);