const express = require('express');
const model = require('../models/reputationUser.model');
const app = express();

// 1) get all individual user reputation records.
app.route('/').get(function(req, res) {
  model.find(function(err, reputationUsers) {
    if (err) {
      return res.status(404).send('No reputationUsers found: ' + err);
    } else {
      return res.json(reputationUsers);
    }
  });
});

// 2) get one individual user reputation record.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, reputationUser) {
    if (err) {
      return res.status(404).send('ReputationUser not found: ' + err);
    } else {
      return res.json(reputationUser);
    }
  });
});

// 3) add new individual user reputation record.
app.route('/add').post(function(req, res) {
  let reputationUser = new model(req.body);
  reputationUser.save()
    .then(reputationUser => {
      // return json object.
      return res.status(200).json({'reputationUser': 'ReputationUser added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new reputationUser failed: ' + err);
    })
});

// 4) update a individual user reputation record
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, reputationUser) {
    if (!reputationUser) {
      return res.status(404).send('ReputationUser not found');
    } else {
      reputationUser.ratedBy = req.body.ratedBy;
      reputationUser.userId = req.body.userId;
      reputationUser.jobId = req.body.jobId;
      reputationUser.teamId = req.body.teamId;
      reputationUser.rating = req.body.rating;
      reputationUser.comment = req.body.comment;
      reputationUser.save()
        .then(reputationUser => {
          return res.json('ReputationUser updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating ReputationUser failed: ' + err);
        });
    }
  });
});

// 5) delete a individual user reputation record.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, reputationUser) {
    if (!reputationUser) {
      return res.status(404).send('reputationUser not found: ' + err);
    } else {
      return res.json('reputationUser deleted successfully!');
    }
  });
});

module.exports = app;
