const express = require('express');
const model = require('../models/category.model');
const app = express();

// 1) get all categories.
app.route('/').get(function(req, res) {
  model.find(function(err, categories) {
    if (err) {
      return res.status(404).send('No categories found: ' + err);
    } else {
      return res.json(categories);
    }
  });
});

// 2) get one category.
app.route('/:id').get(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, category) {
    if (err) {
      return res.status(404).send('Category not found: ' + err);
    } else {
      return res.json(category);
    }
  });
});

// 3) add new category.
app.route('/add').post(function(req, res) {
  let category = new model(req.body);
  category.save()
    .then(category => {
      // return json object.
      return res.status(200).json({'Category': 'category ' + category.name + ' added successfully!'});
    })
    .catch(err => {
      // send returns just a string.
      return res.status(400).send('Adding new category failed: ' + err);
    })
});

// 4) update a category.
app.route('/update/:id').patch(function(req, res) {
  let id = req.params.id;
  model.findById(id, function(err, category) {
    if (!category) {
      return res.status(404).send('Category not found');
    } else {
      category.name = req.body.name;
      category.save()
        .then(category => {
          return res.json('Category ' + category.name + ' updated successfully!');
        })
        .catch(err => {
          return res.status(400).send('Updating category ' + category.name + ' failed: ' + err);
        });
    }
  });
});

// 5) delete a category.
app.route('/delete/:id').delete(function(req, res) {
  let id = req.params.id;
  model.findByIdAndDelete(id, function(err, category) {
    if (!category) {
      return res.status(404).send('Category not found: ' + err);
    } else {
      return res.json('Category ' + category.name + ' deleted successfully!');
    }
  });
});

module.exports = app;
