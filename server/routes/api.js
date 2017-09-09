
(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();

  router.use('/contract', require('./contract'));    

  module.exports = router;

})();


