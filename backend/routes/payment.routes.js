const express = require('express');
const model = require('../models/payment.model');
const app = express();

// 1) get all payments.
app.route('/').get(function(req, res) {
  model.find(function(err, payments) {
    if (err) {
      return res.status(404).send('No payment records found: ' + err);
    } else {
      return res.json(payments);
    }
  });
});

// 2) get one payment.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, payment) {
    if (err) {
      return res.status(404).send('The payment record was not found: ' + err);
    } else {
      return res.json(payment);
    }
  });
});

// 3) add new payment.
app.route('/add').post(function(req, res) {
  let payment = new model(req.body);
  payment.save()
    .then(payment => {
      // return json object.
      return res.status(200).json({'payment': 'The payment record was added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new payment record failed: ' + err);
    })
});

// 4) update a payment.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, payment) {
    if (!payment) {
      return res.status(404).send('The payment was not found');
    } else {
      payment.userId = req.body.userId;
      payment.teamId = req.body.teamId;
      payment.jobId = req.body.jobId;
      payment.amount = req.body.amount;
      payment.datePaid = req.body.datePaid;
      payment.howPaid = req.body.howPaid;
      category.save()
        .then(payment => {
          return res.json('The payment record was updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating payment record failed: ' + err);
        });
    }
  });
});

// 5) delete a payment.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, category) {
    if (!category) {
      return res.status(404).send('The payment record was not found: ' + err);
    } else {
      return res.json('The payment record was deleted successfully!');
    }
  });
});

module.exports = app;
