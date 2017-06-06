'use strict';
const express = require('express');
const router = express.Router();
const CreateGraphDBController = require('../controllers').CreateGraphDB;

router.route('/')
  .get(CreateGraphDBController.createGraphDB)

module.exports = router;
