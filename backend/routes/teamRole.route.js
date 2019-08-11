const express = require('express');
const model = require('../models/teamRole.model');
const app = express();

// 1) get all userId-teamId-jobId sets.
app.route('/').get(function(req, res) {
  model.find(function(err, teamRole) {
    if (err) {
      return res.status(404).send('No teamRole records found: ' + err);
    } else {
      return res.json(teamRole);
    }
  });
});

// 2) get one userId-teamId-jobId set.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, teamRole) {
    if (err) {
      return res.status(404).send('The teamRole record was not found: ' + err);
    } else {
      return res.json(teamRole);
    }
  });
});

// 3) add new userId-teamId-jobId set.
app.route('/add').post(function(req, res) {
  let teamRole = new model(req.body);
  teamRole.save()
    .then(teamRole => {
      // return json object.
      return res.status(200).json({'teamRole': 'The teamRole record was added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new teamRole record failed: ' + err);
    })
});

// 4) update a userId-teamId-jobId pair.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, teamRole) {
    if (!teamRole) {
      return res.status(404).send('The teamRole was not found');
    } else {
      teamRole.userId = req.body.userId;
      teamRole.teamId = req.body.teamId;
      teamRole.jobId = req.body.jobId;
      category.save()
        .then(teamRole => {
          return res.json('The teamRole record was updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating teamRole record failed: ' + err);
        });
    }
  });
});

// 5) delete a userId-teamId-jobId pair.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, category) {
    if (!category) {
      return res.status(404).send('The teamRole record was not found: ' + err);
    } else {
      return res.json('The teamRole record was deleted successfully!');
    }
  });
});

module.exports = app;
