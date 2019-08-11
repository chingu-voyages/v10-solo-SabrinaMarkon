const express = require('express');
const model = require('../models/teamInvitation.model');
const app = express();

// 1) get all team invitations.
app.route('/').get(function(req, res) {
  model.find(function(err, teamInvitations) {
    if (err) {
      return res.status(404).send('No teamInvitations found: ' + err);
    } else {
      return res.json(teamInvitations);
    }
  });
});

// 2) get one team invitation.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, teamInvitation) {
    if (err) {
      return res.status(404).send('TeamInvitation not found: ' + err);
    } else {
      return res.json(teamInvitation);
    }
  });
});

// 3) add new team invitation.
app.route('/add').post(function(req, res) {
  let teamInvitation = new model(req.body);
  teamInvitation.save()
    .then(teamInvitation => {
      // return json object.
      return res.status(200).json({'teamInvitation': 'TeamInvitation added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new teamInvitation failed: ' + err);
    })
});

// 4) update a team invitation.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, teamInvitation) {
    if (!teamInvitation) {
      return res.status(404).send('TeamInvitation not found');
    } else {
      teamInvitation.invitedByUserId = req.body.invitedByUserId;
      teamInvitation.userId = req.body.userId;
      teamInvitation.teamId = req.body.teamId;
      teamInvitation.invitationDate = req.body.invitationDate;
      teamInvitation.invitationAccepted = req.body.invitationAccepted;
      teamInvitation.save()
        .then(teamInvitation => {
          return res.json('TeamInvitation updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating teamInvitation failed: ' + err);
        });
    }
  });
});

// 5) delete a team invitation.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, teamInvitation) {
    if (!teamInvitation) {
      return res.status(404).send('TeamInvitation not found: ' + err);
    } else {
      return res.json('TeamInvitation deleted successfully!');
    }
  });
});

module.exports = app;
