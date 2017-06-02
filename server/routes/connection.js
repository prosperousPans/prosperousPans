'use strict';
const express = require('express');
const router = express.Router();
const ConnectionController = require('../controllers').Connection;

router.route('/')
  .get(ConnectionController.getAll)
  // below: sorting query for desired number of users:


module.exports = router;
