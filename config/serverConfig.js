const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./sessionsConfig');
const ssr = require('../middleware/renderComponent');
const auth = require('../middleware/auth');

const serverConfig = (app) => {
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(express.static(path.join(__dirname, '/public')));

  app.use(ssr);
  app.use(auth);

  app.use(morgan('dev'));
};

module.exports = serverConfig;
