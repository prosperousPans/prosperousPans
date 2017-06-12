'use strict';
const express = require('express');
const router = express.Router();
const GetProfileController = require('../controllers').GetProfile;

router.route('/')
  .get(GetProfileController.getProfile)

router.route('/post-daily-profiles')
  .post(GetProfileController.postDailyProfiles)

module.exports = router;
