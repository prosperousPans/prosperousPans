'use strict';
const express = require('express');
const router = express.Router();
const UsersController = require('../controllers').Users;

router.route('/')
  .get(UsersController.getNewUsers)


module.exports = router;
