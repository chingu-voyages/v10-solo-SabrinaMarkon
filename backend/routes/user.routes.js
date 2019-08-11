const express = require('express');
const model = require('../models/user.model');
const app = express();

// 1) get all users.
app.route('/').get(function(req, res) {
  model.find(function(err, users) {
    if (err) {
      return res.status(404).send('No users found: ' + err);
    } else {
      return res.json(users);
    }
  });
});

// 2) get one user.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, user) {
    if (err) {
      return res.status(404).send('User not found: ' + err);
    } else {
      return res.json(user);
    }
  });
});

// 3) add new user.
app.route('/add').post(function(req, res) {
  let user = new model(req.body);
  user.save()
    .then(user => {
      // return json object.
      return res.status(200).json({'user': 'User ' + user.email + ' added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new user failed: ' + err);
    })
});

// 4) update a user.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, user) {
    if (!user) {
      return res.status(404).send('User not found');
    } else {
      user.email = req.body.email;
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.preferredTitle = req.body.preferredTitle;
      user.portfolioUrl = req.body.portfolioUrl;
      user.street = req.body.street;
      user.city = req.body.city;
      user.state = req.body.state;
      user.country = req.body.country;
      user.zip = req.body.zip;
      user.phone = req.body.phone;
      user.joined = req.body.joined;
      user.save()
        .then(user => {
          return res.json('User ' + user.email + ' updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating user ' + user.email + ' failed: ' + err);
        });
    }
  });
});

// 5) delete a user.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, user) {
    if (!user) {
      return res.status(404).send('User not found: ' + err);
    } else {
      return res.json('User ' + user.email + ' deleted successfully!');
    }
  });
});

module.exports = app;
