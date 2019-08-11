const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
  jobId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Job ID is a required field')
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
  amount: {
    type: Number,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Bid amount is a required field')
      }
    }
  },
  timeEstimate: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Time estimate to complete job is a required field')
      }
    }
  },
  bidDate: {
    type: Date,
    default: Date.now
  },
  bidAccepted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Bid', bidSchema);