'use strict';
const express = require('express');
const router = express.Router();
const PriorityRecommendationGraphDbController = require('../graphDbControllers').PriorityRecommendation;

router.route('/')
  .get(PriorityRecommendationGraphDbController.getPriorityRecommendation)


module.exports = router;
