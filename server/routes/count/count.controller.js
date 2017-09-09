(function() {
    'use strict';
    
    var count = 0;

    // get
    module.exports.get = function(req, res) { 
      res.json({
        "count" : count
      });
    };
    
    // post
    module.exports.add = function(req, res) {
        count++;
        res.send("Added");
     };
        
})();