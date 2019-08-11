const express = require('express');
const model = require('../models/employmentOffer.model');
const app = express();

// 1) get all employment offers.
app.route('/').get(function(req, res) {
  model.find(function(err, employmentOffers) {
    if (err) {
      return res.status(404).send('No employmentOffers found: ' + err);
    } else {
      return res.json(employmentOffers);
    }
  });
});

// 2) get one employment offer.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, employmentOffer) {
    if (err) {
      return res.status(404).send('employmentOffer not found: ' + err);
    } else {
      return res.json(employmentOffer);
    }
  });
});

// 3) add new employment offer.
app.route('/add').post(function(req, res) {
  let employmentOffer = new model(req.body);
  employmentOffer.save()
    .then(employmentOffer => {
      // return json object.
      return res.status(200).json({'employmentOffer': 'employmentOffer added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new employmentOffer failed: ' + err);
    })
});

// 4) update a employment offer.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, employmentOffer) {
    if (!employmentOffer) {
      return res.status(404).send('employmentOffer not found');
    } else {
      employmentOffer.jobId = req.body.jobId;
      employmentOffer.teamId = req.body.teamId;
      employmentOffer.offerDate = req.body.offerDate;
      employmentOffer.offerAccepted = req.body.offerAccepted;
      employmentOffer.save()
        .then(employmentOffer => {
          return res.json('employmentOffer updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating employmentOffer failed: ' + err);
        });
    }
  });
});

// 5) delete a employment offer.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, employmentOffer) {
    if (!employmentOffer) {
      return res.status(404).send('employmentOffer not found: ' + err);
    } else {
      return res.json('employmentOffer deleted successfully!');
    }
  });
});

module.exports = app;
