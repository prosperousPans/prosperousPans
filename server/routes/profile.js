'use strict';
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers').Profile;

router.route('/')
  .get(ProfileController.getUserDetails)

router.route('/tags')
  .get(ProfileController.getUserTags)

router.route('/experience')
  .get(ProfileController.getUserExperience)

router.route('/add-tag')
  .post(ProfileController.addTag)

router.route('/delete-tag')
  .post(ProfileController.deleteTag)

router.route('/add-summary')
  .post(ProfileController.addSummary)

router.route('/update-Industry')
  .post(ProfileController.updateIndustry)

module.exports = router;
