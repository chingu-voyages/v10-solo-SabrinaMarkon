const express = require('express');
const model = require('../models/bid.model');
const app = express();

// 1) get all bids.
app.route('/').get(function(req, res) {
  model.find(function(err, bids) {
    if (err) {
      return res.status(404).send('No bids found: ' + err);
    } else {
      return res.json(bids);
    }
  });
});

// 2) get one bid.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, bid) {
    if (err) {
      return res.status(404).send('Bid not found: ' + err);
    } else {
      return res.json(bid);
    }
  });
});

// 3) add new bid.
app.route('/add').post(function(req, res) {
  let bid = new model(req.body);
  bid.save()
    .then(bid => {
      // return json object.
      return res.status(200).json({'bid': 'Bid added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new bid failed: ' + err);
    })
});

// 4) update a bid.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, bid) {
    if (!bid) {
      return res.status(404).send('Bid not found');
    } else {
      bid.jobId = req.body.jobId;
      bid.teamId = req.body.teamId;
      bid.amount = req.body.amount;
      bid.timeEstimate = req.body.timeEstimate;
      bid.bidDate = req.body.bidDate;
      bid.bidAccepted = req.body.bidAccepted;
      bid.save()
        .then(bid => {
          return res.json('Bid updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating bid failed: ' + err);
        });
    }
  });
});

// 5) delete a bid.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, bid) {
    if (!bid) {
      return res.status(404).send('Bid not found: ' + err);
    } else {
      return res.json('Bid deleted successfully!');
    }
  });
});

module.exports = app;
