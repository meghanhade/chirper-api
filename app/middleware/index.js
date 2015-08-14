var express = require('express');
var bodyParser = require('body-parser');

var accessControls = require('./access-controls');
var loadDatabase   = require('./sequelize');
var userFromToken  = require('./user-from-token'); // <-- ADD THIS!


module.exports = function(app) {

  // Allow JSON and URL-encoded bodies
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ extended: false }));

  // Allow static assets
  app.use(express.static('public'));

  // Access control
  app.use(accessControls);

  // Load the models and their relations
  app.use(loadDatabase);

  // Load the user from the token
  app.use(require('express-bearer-token')());
  app.use(userFromToken); // <-- ...AND THIS!

};