const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  subject: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Email subject is a required field')
      }
    }
  },
  message: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Email message is a required field')
      }
    }
  },
  tofield: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Email to field is required')
      }
    }
  },
  fromfield: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Email from field is required')
      }
    }
  },
  messagetype: {
    type: String,
    required: true,
    default: 'admin'
  },
  submittime: {
    type: Date,
    default: Date.now
  },
  sent: {
    type: Boolean,
    default: false
  },
  keep: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Email', emailSchema);
