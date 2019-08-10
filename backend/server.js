// get private variables:
require('dotenv').config({path: '.env'});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// connect to mongodb:
const mongoose = require('mongoose');
const PORT = 4000;

// pass middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.REACT_APP_MONGODB_CONNECTION_STRING, 
  { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully!');
});

app.listen(PORT, function() { 
  console.log('Server is listening on port ' + PORT);
})
