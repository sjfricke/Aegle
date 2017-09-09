(function() {
    'use strict';
    
     /* data
    {
    	steps : [Number]
    }
	*/

    // returns number of aegle for steps taken
    module.exports.conversion = function(data) {
    	if (!data.steps || data.steps == NaN) { 
        	return -1;
     	}

      return Math.round(data.steps * 0.53425); //some random algo conversion
    }
                 
})();