(function() {
    'use strict';
    
    /* data
    {
    	jacks : [Number],
    	time  : [Number] 
    }
	*/

    // returns number of aegle for jacks within given time in seconds
    module.exports.conversion = function(data) {
  		if (!data.jacks || !data.time || data.jacks == NaN || data.time == NaN) {
        	return -1;
      	}

        return (data.jacks * 0.53425) / data.time; //some random algo conversion
    }
                 
})();