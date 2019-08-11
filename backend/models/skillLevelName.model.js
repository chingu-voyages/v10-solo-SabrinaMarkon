const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillLevelNameSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Skill level name is a required field')
      }
    }
  }
});

module.exports = mongoose.model('SkillLevelName', skillLevelNameSchema);
