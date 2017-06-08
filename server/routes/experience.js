'use strict';
const express = require('express');
const router = express.Router();
const ExperienceController = require('../controllers').Experience;

router.route('/')
  .get(ExperienceController.getAll)


module.exports = router;
