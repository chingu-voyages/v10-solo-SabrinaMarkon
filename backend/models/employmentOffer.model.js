const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employmentOfferSchema = new Schema({
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
  offerDate: {
    type: Date,
    default: Date.now
  },
  offerAccepted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('EmploymentOffer', employmentOfferSchema);