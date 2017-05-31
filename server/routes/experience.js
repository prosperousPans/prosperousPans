'use strict';
const express = require('express');
const router = express.Router();
const ExperienceController = require('../controllers').Experience;

router.route('/')
  .get(ExperienceController.getAll)
  // below: sorting query for desired number of users:


module.exports = router;
