(function() {
  'use strict';
  var express = require('express');
  var controller = require('./contract.controller')    
    
  var router = express.Router();

  router.post('/submit', controller.submit);

  module.exports = router;

})();