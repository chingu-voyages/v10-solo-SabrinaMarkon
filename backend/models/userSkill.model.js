const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSkillSchema = new Schema({
  userId: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('User ID is a required field')
      }
    }
  },
  name: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Skill name is a required field')
      }
    }
  },
  levelId: { // levelId is from the skillLevels collection.
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        new Error('Skill level ID is a required field')
      }
    }
  }
});

module.exports = mongoose.model('userSkill', userSkillSchema);