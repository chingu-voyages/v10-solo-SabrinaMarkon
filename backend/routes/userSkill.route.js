const express = require('express');
const model = require('../models/userSkill.model');
const app = express();

// 1) get all user skills.
app.route('/').get(function(req, res) {
  model.find(function(err, userSkills) {
    if (err) {
      return res.status(404).send('No userSkill records found: ' + err);
    } else {
      return res.json(userSkills);
    }
  });
});

// 2) get one user skill.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, userSkill) {
    if (err) {
      return res.status(404).send('The userSkill record was not found: ' + err);
    } else {
      return res.json(userSkill);
    }
  });
});

// 3) add new user skill.
app.route('/add').post(function(req, res) {
  let userSkill = new model(req.body);
  userSkill.save()
    .then(userSkill => {
      // return json object.
      return res.status(200).json({'userSkill': 'The userSkill record was added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new userSkill record failed: ' + err);
    })
});

// 4) update a user skill.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, userSkill) {
    if (!userSkill) {
      return res.status(404).send('The userSkill was not found');
    } else {
      userSkill.name = req.body.name;
      userSkill.userId = req.body.userId;
      userSkill.levelId = req.body.levelId;
      category.save()
        .then(userSkill => {
          return res.json('The userSkill record was updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating userSkill record failed: ' + err);
        });
    }
  });
});

// 5) delete a user skill.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, category) {
    if (!category) {
      return res.status(404).send('The userSkill record was not found: ' + err);
    } else {
      return res.json('The userSkill record was deleted successfully!');
    }
  });
});

module.exports = app;
