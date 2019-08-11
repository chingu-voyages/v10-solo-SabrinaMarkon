const express = require('express');
const model = require('../models/jobIdCategoryId.model');
const app = express();

// 1) get all jobId=categoryId pairs.
app.route('/').get(function(req, res) {
  model.find(function(err, jobIdCategoryId) {
    if (err) {
      return res.status(404).send('No jobIdCategoryId records found: ' + err);
    } else {
      return res.json(jobIdCategoryId);
    }
  });
});

// 2) get one jobId=categoryId pair.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, jobIdCategoryId) {
    if (err) {
      return res.status(404).send('The jobIdCategoryId record was not found: ' + err);
    } else {
      return res.json(jobIdCategoryId);
    }
  });
});

// 3) add new jobId=categoryId pairs.
app.route('/add').post(function(req, res) {
  let jobIdCategoryId = new model(req.body);
  jobIdCategoryId.save()
    .then(jobIdCategoryId => {
      // return json object.
      return res.status(200).json({'jobIdCategoryId': 'The jobIdCategoryId record was added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new jobIdCategoryId record failed: ' + err);
    })
});

// 4) update a jobId=categoryId pair.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, jobIdCategoryId) {
    if (!jobIdCategoryId) {
      return res.status(404).send('The jobIdCategoryId was not found');
    } else {
      jobIdCategoryId.jobId = req.body.jobId;
      jobIdCategoryId.categoryId = req.body.categoryId;
      category.save()
        .then(jobIdCategoryId => {
          return res.json('The jobIdCategoryId record was updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating jobIdCategoryId record failed: ' + err);
        });
    }
  });
});

// 5) delete a jobId=categoryId pair.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, category) {
    if (!category) {
      return res.status(404).send('The jobIdCategoryId record was not found: ' + err);
    } else {
      return res.json('The jobIdCategoryId record was deleted successfully!');
    }
  });
});

module.exports = app;
