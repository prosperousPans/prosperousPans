'use strict';
const express = require('express');
const router = express.Router();
const GetMatchesGraphDbController = require('../graphDbControllers');
const GetRandMatchesController = require('../controllers');

router.route('/')
  .get(GetMatchesGraphDbController.PriorityRecommendation.getPriorityRecommendation,
    GetMatchesGraphDbController.Recommendation.getRecommendation,
    GetRandMatchesController.Users.getNewUsers)

module.exports = router;
