'use strict';    
const express = require('express');   
const router = express.Router();    
const InsertReason = require('../controllers').InsertReason;    

router.route('/')
   .post(InsertReason.insertReason)    

module.exports = router;