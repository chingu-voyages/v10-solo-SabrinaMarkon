const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!value) {
        new Error('Email address is a required field')
      }
    }
  },
  firstname: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('First name is a required field')
      }
    }
  },
  lastname: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Last name is a required field')
      }
    }
  },
  street: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Street is a required field')
      }
    }
  },
  city: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('City is a required field')
      }
    }
  },
  state: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('State is a required field')
      }
    }
  },
  country: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Country is a required field')
      }
    }
  },
  zip: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Zip or postal code is a required field')
      }
    }
  },
  phone: {
    type: String,
  },
  joined: {
    type: Date,
  },
});

module.exports = mongoose.model('User', userSchema);
