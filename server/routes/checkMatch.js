'use strict';
const express = require('express');
const router = express.Router();
const CheckMatchController = require('../controllers').CheckMatch;

router.route('/')
  .get(CheckMatchController.checkMatch)


module.exports = router;
