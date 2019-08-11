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
  from: {
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
    validate(value) {
      if (!value) {
        new Error('Email message type required field')
      }
    }
  },
  submittime: {
    type: Date
  },
  sendtime: {
    type: Date
  },
  keep: {
    type: Boolean
  }
});

module.exports = mongoose.model('Email', emailSchema);
