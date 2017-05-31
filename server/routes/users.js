'use strict';
const express = require('express');
const router = express.Router();
const UsersController = require('../controllers').Users;

router.route('/')
  .get(UsersController.getAll)
  // below: sorting query for desired number of users:


module.exports = router;
