'use strict';
const express = require('express');
const router = express.Router();
const InsertConnectionController = require('../controllers').InsertConnection;

router.route('/')
  .post(InsertConnectionController.insertConnection)


module.exports = router;
