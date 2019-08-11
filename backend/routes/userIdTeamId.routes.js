const express = require('express');
const model = require('../models/userIdTeamId.model');
const app = express();

// 1) get all userId-teamId pairs.
app.route('/').get(function(req, res) {
  model.find(function(err, userIdTeamId) {
    if (err) {
      return res.status(404).send('No userIdTeamId records found: ' + err);
    } else {
      return res.json(userIdTeamId);
    }
  });
});

// 2) get one userId-teamId pair.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, ) {
    if (err) {
      return res.status(404).send('The userIdTeamId record was not found: ' + err);
    } else {
      return res.json(userIdTeamId);
    }
  });
});

// 3) add new userId-teamId pairs.
app.route('/add').post(function(req, res) {
  let userIdTeamId = new model(req.body);
  userIdTeamId.save()
    .then(userIdTeamId => {
      // return json object.
      return res.status(200).json({'userIdTeamId': 'The userIdTeamId record was added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new userIdTeamId record failed: ' + err);
    })
});

// 4) update a userId-teamId pair.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, userIdTeamId) {
    if (!userIdTeamId) {
      return res.status(404).send('The userIdTeamId was not found');
    } else {
      userIdTeamId.userId = req.body.userId;
      userIdTeamId.teamId = req.body.teamId;
      category.save()
        .then(userIdTeamId => {
          return res.json('The userIdTeamId record was updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating userIdTeamId record failed: ' + err);
        });
    }
  });
});

// 5) delete a userId-teamId pair.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, category) {
    if (!category) {
      return res.status(404).send('The userIdTeamId record was not found: ' + err);
    } else {
      return res.json('The userIdTeamId record was deleted successfully!');
    }
  });
});

module.exports = app;
