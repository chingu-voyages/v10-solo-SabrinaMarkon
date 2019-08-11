const express = require('express');
const model = require('../models/reputationTeam.model');
const app = express();

// 1) get all team reputation records.
app.route('/').get(function(req, res) {
  model.find(function(err, reputationTeams) {
    if (err) {
      return res.status(404).send('No reputationTeams found: ' + err);
    } else {
      return res.json(reputationTeams);
    }
  });
});

// 2) get one team reputation record.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, reputationTeam) {
    if (err) {
      return res.status(404).send('reputationTeam not found: ' + err);
    } else {
      return res.json(reputationTeam);
    }
  });
});

// 3) add new team reputation record.
app.route('/add').post(function(req, res) {
  let reputationTeam = new model(req.body);
  reputationTeam.save()
    .then(reputationTeam => {
      // return json object.
      return res.status(200).json({'reputationTeam': 'reputationTeam added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new reputationTeam failed: ' + err);
    })
});

// 4) update a team reputation record
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, reputationTeam) {
    if (!reputationTeam) {
      return res.status(404).send('reputationTeam not found');
    } else {
      reputationTeam.ratedBy = req.body.ratedBy;
      reputationTeam.jobId = req.body.jobId;
      reputationTeam.teamId = req.body.teamId;
      reputationTeam.rating = req.body.rating;
      reputationTeam.comment = req.body.comment;
      reputationTeam.publicComment = req.body.publicComment;
      reputationTeam.save()
        .then(reputationTeam => {
          return res.json('reputationTeam updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating reputationTeam failed: ' + err);
        });
    }
  });
});

// 5) delete a team reputation record.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, reputationTeam) {
    if (!reputationTeam) {
      return res.status(404).send('reputationTeam not found: ' + err);
    } else {
      return res.json('reputationTeam deleted successfully!');
    }
  });
});

module.exports = app;
