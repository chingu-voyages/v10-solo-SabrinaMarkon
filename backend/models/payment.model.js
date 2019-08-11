const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
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
  },
  amount: {
    type: Number,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Amount is a required field')
      }
    }
  },
  datePaid: {
    type: Date,
    default: Date.now
  },
  howPaid: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('HowPaid is a required field')
      }
    } 
  }
});

module.exports = mongoose.model('Payment', PaymentSchema);