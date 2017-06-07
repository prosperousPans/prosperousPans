'use strict';
const express = require('express');
const router = express.Router();
const ResponseController = require('../controllers').Response;

router.route('/')
  .get(function (req, res){
    console.log('inside route RESPONSE')
    res.send('HELLO WORLD');
  })


module.exports = router;
