const helmet = require('helmet');
const express = require('express');
const app = express();

// Mount helmet.xssFilter middleware
app.use(helmet.xssFilter());

// Your routes
app.get('/', function(req, res) {
  res.send('Hello world');
});

module.exports = app;