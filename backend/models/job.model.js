const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Job title is a required field')
      }
    }
  },
  description: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Job description is a required field')
      }
    }
  },
  budgetRange: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Budget range is a required field')
      }
    }
  },
  timeRange: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Estimated time frame is a required field')
      }
    }
  },
  tags: {
    type: [String],
    required: true,
    validate(value) {
      if (!value) {
        new Error('Tag list is a required field')
      }
    }
  },
  categories: {
    type: [String],
    required: true,
    validate(value) {
      if (!value) {
        new Error('Category list is a required field')
      }
    }
  },
  teamHired: {
    type: String
  },
  agreedPayment: {
    type: Number
  },
  datePaidForWork: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', jobSchema);
