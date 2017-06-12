'use strict';
const express = require('express');
const router = express.Router();
const LoginController = require('../controllers').Login;


router.route('/user')
  .post(LoginController.addUser)

module.exports = router;