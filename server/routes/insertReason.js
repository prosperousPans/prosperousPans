'use strict';
const express = require('express');
const router = express.Router();
const InsertReason = require('../controllers').InsertReason;

router.route('/')
  .get( function (req, res) {
    console.log('INSIDE GET route')
    res.send('HELLOO  INSERT REASON GET');
  })  
  .post(InsertReason.insertReason)


module.exports = router;
