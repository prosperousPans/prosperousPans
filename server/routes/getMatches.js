'use strict';
const express = require('express');
const router = express.Router();
// const GetMatchesGraphDbController = require('../graphDbControllers');
// const GetRandMatchesController = require('../controllers');

const GetAllMatchesGraphDbServices = require('../graphDbServices');

router.route('/')
  // .get(GetMatchesGraphDbController.PriorityRecommendation.getPriorityRecommendation,
  //   GetMatchesGraphDbController.Recommendation.getRecommendation,
  //   GetRandMatchesController.Users.getNewUsers)

  .get(GetAllMatchesGraphDbServices.GetMatches.getMatches);

module.exports = router;
