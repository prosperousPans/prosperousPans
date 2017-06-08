'use strict';
const express = require('express');
const router = express.Router();
const RecommendationGraphDbController = require('../graphDbControllers').Recommendation;

router.route('/')
  .get(RecommendationGraphDbController.getRecommendation)


module.exports = router;
