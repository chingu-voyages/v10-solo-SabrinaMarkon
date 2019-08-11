const express = require('express');
const model = require('../models/skillLevelName.model');
const app = express();

// 1) get all skillLevelNames.
app.route('/').get(function(req, res) {
  model.find(function(err, skillLevelNames) {
    if (err) {
      return res.status(404).send('No skillLevelName records found:: ' + err);
    } else {
      return res.json(skillLevelNames);
    }
  });
});

// 2) get one skillLevelName.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, skillLevelName) {
    if (err) {
      return res.status(404).send('The skillLevelName record was not found: ' + err);
    } else {
      return res.json(skillLevelName);
    }
  });
});

// 3) add new skillLevelName.
app.route('/add').post(function(req, res) {
  let skillLevelName = new model(req.body);
  skillLevelName.save()
    .then(skillLevelName => {
      // return json object.
      return res.status(200).json({'skillLevelName': 'The skillLevelName record was added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new skillLevelName record failed: ' + err);
    })
});

// 4) update a skillLevelName.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, skillLevelName) {
    if (!skillLevelName) {
      return res.status(404).send('The skillLevelName was not found');
    } else {
      skillLevelName.name = req.body.name;
      skillLevelName.save()
        .then(skillLevelName => {
          return res.json('The skillLevelName record was updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating skillLevelName record failed: ' + err);
        });
    }
  });
});

// 5) delete a skillLevelName.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, skillLevelName) {
    if (!skillLevelName) {
      return res.status(404).send('The skillLevelName record was not found: ' + err);
    } else {
      return res.json('The skillLevelName record was deleted successfully!');
    }
  });
});

module.exports = app;
