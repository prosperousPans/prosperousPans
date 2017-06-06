'use strict';
const express = require('express');
const router = express.Router();
const PopulateFullGraphDBController = require('../controllers').PopulateFullGraphDB;

router.route('/')
  .get(PopulateFullGraphDBController.populateFullGraphDB)

module.exports = router;
