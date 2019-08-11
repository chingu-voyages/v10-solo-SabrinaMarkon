const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobcategorySchema = new Schema({
  jobId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Job ID is a required field')
      }
    }
  },
  categoryId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Category ID is a required field')
      }
    }
  }
});

module.exports = mongoose.model('JobCategory', jobcategorySchema);
