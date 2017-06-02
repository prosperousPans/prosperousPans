'use strict';
const express = require('express');
const router = express.Router();
const UsersController = require('../controllers').Users;

router.route('/')
  .get(UsersController.getNewUsers)
  // below: sorting query for desired number of users:


module.exports = router;
