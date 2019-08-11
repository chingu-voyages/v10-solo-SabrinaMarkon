const express = require('express');
const model = require('../models/jobcategory.model');
const app = express();

// 1) get all job categories.
app.route('/').get(function(req, res) {
  model.find(function(err, jobcategories) {
    if (err) {
      return res.status(404).send('No jobId-categoryId records found: ' + err);
    } else {
      return res.json(jobcategories);
    }
  });
});

// 2) get one job category.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, jobcategory) {
    if (err) {
      return res.status(404).send('The jobId-categoryId record was not found: ' + err);
    } else {
      return res.json(jobcategory);
    }
  });
});

// 3) add new job category.
app.route('/add').post(function(req, res) {
  let jobcategory = new model(req.body);
  jobcategory.save()
    .then(jobcategory => {
      // return json object.
      return res.status(200).json({'JobCategory': 'The jobId-categoryId record was added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new jobId-categoryId record failed: ' + err);
    })
});

// 4) update a job category.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, jobcategory) {
    if (!jobcategory) {
      return res.status(404).send('The jobId-categoryId was not found');
    } else {
      jobcategory.jobId = req.body.jobId;
      jobcategory.categoryId = req.body.categoryId;
      category.save()
        .then(jobcategory => {
          return res.json('The jobId-categoryId record was updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating jobId-categoryId record failed: ' + err);
        });
    }
  });
});

// 5) delete a job category.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, category) {
    if (!category) {
      return res.status(404).send('The jobId-categoryId record was not found: ' + err);
    } else {
      return res.json('The jobId-categoryId record was deleted successfully!');
    }
  });
});

module.exports = app;
