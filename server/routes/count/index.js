(function() {
  'use strict';

  var express = require('express');
  var controller = require('./count.controller')    
    
  var router = express.Router();

  router.get('/', controller.get);
  router.post('/add', controller.add);

  module.exports = router;

})();