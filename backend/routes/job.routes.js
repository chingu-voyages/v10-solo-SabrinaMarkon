const express = require('express');
const model = require('../models/job.model');
const app = express();

// 1) get all jobs.
app.route('/').get(function(req, res) {
  model.find(function(err, jobs) {
    if (err) {
      return res.status(404).send('No jobs found: ' + err);
    } else {
      return res.json(jobs);
    }
  });
});

// 2) get one job.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, job) {
    if (err) {
      return res.status(404).send('Job not found: ' + err);
    } else {
      return res.json(job);
    }
  });
});

// 3) add new job.
app.route('/add').post(function(req, res) {
  let job = new model(req.body);
  job.save()
    .then(job => {
      // return json object.
      return res.status(200).json({'job': 'Job ' + job.title + ' added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new job failed: ' + err);
    })
});

// 4) update a job.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, job) {
    if (!job) {
      return res.status(404).send('Job not found');
    } else {
      job.title = req.body.title;
      job.description = req.body.description;
      job.budgetRange = req.body.budgetRange;
      job.timeRange = req.body.timeRange;
      job.tags = req.body.tags; // array
      job.categories = req.body.categories; // array
      job.teamHired = req.body.teamHired;
      job.agreedPayment = req.body.agreedPayment;
      job.datePaidForWork = req.body.datePaidForWork;
      job.save()
        .then(job => {
          return res.json('Job ' + job.title + ' updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating job ' + job.title + ' failed: ' + err);
        });
    }
  });
});

// 5) delete a job.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, job) {
    if (!job) {
      return res.status(404).send('Job not found: ' + err);
    } else {
      return res.json('Job ' + job.title + ' deleted successfully!');
    }
  });
});

module.exports = app;
