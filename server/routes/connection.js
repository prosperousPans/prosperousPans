'use strict';
const express = require('express');
const router = express.Router();
const ConnectionController = require('../controllers').Connection;

router.route('/')
  .get(ConnectionController.getAll)


module.exports = router;
