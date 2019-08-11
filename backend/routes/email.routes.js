const express = require('express');
const model = require('../models/email.model');
const app = express();

// 1) get all emails.
app.route('/').get(function(req, res) {
  model.find(function(err, emails) {
    if (err) {
      return res.status(404).send('No emails found: ' + err);
    } else {
      return res.json(emails);
    }
  });
});

// 2) get one email.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, email) {
    if (err) {
      return res.status(404).send('Email not found: ' + err);
    } else {
      return res.json(email);
    }
  });
});

// 3) add new email.
app.route('/add').post(function(req, res) {
  let email = new model(req.body);
  email.save()
    .then(email => {
      // return json object.
      return res.status(200).json({'email': 'Email ' + email.subject + ' added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new email failed: ' + err);
    })
});

// 4) update a email.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, email) {
    if (!email) {
      return res.status(404).send('Email not found');
    } else {
      email.subject = req.body.subject;
      email.message = req.body.message;
      email.to = req.body.to;
      email.from = req.body.from;
      email.tags = req.body.tags;
      email.type = req.body.type; // bid, offer, admin
      email.submittime = req.body.submittime;
      email.sendtime = req.body.sendtime;
      email.keep = req.body.keep; // boolean save?
      email.save()
        .then(email => {
          return res.json('Email ' + email.subject + ' updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating email ' + email.subject + ' failed: ' + err);
        });
    }
  });
});

// 5) delete a email.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, email) {
    if (!email) {
      return res.status(404).send('Email not found: ' + err);
    } else {
      return res.json('Email ' + email.subject + ' deleted successfully!');
    }
  });
});

module.exports = app;
