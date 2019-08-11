const express = require('express');
const model = require('../models/team.model');
const app = express();

// 1) get all teams.
app.route('/').get(function(req, res) {
  model.find(function(err, teams) {
    if (err) {
      return res.status(404).send('No teams found: ' + err);
    } else {
      return res.json(teams);
    }
  });
});

// 2) get one team.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, team) {
    if (err) {
      return res.status(404).send('Team not found: ' + err);
    } else {
      return res.json(team);
    }
  });
});

// 3) add new team.
app.route('/add').post(function(req, res) {
  let team = new model(req.body);
  team.save()
    .then(team => {
      // return json object.
      return res.status(200).json({'team': 'Team ' + team.name + ' added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new team failed: ' + err);
    })
});

// 4) update a team.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, team) {
    if (!team) {
      return res.status(404).send('Team not found');
    } else {
      team.name = req.body.name;
      team.portfolioUrl = req.body.portfolioUrl;
      team.datecreated = req.body.datecreated;
      team.save()
        .then(team => {
          return res.json('Team ' + team.name + ' updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating team ' + team.name + ' failed: ' + err);
        });
    }
  });
});

// 5) delete a team.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, team) {
    if (!team) {
      return res.status(404).send('Team not found: ' + err);
    } else {
      return res.json('Team ' + team.name + ' deleted successfully!');
    }
  });
});

module.exports = app;
