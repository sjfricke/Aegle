(function() { 
    'use strict';
    
    const _steps = require("./exercise_steps");
    const _jumping_jacks = require("./exercise_jumping_jacks");
      
    /* on Submit
    { 
      publicKey  : [String],
      exerciseId : [Number],
      data       : {Object}      
    }    
    */
    module.exports.submit = function(req, res) {
        
        // Validate post body
        if ( !req.body.publicKey ) {
          res.status(400).send("Need to include publicKey in body"); return;
        }
        else if ( !req.body.exerciseId || req.body.exerciseId == NaN) {
          res.status(400).send("Need valid exerciseId"); return;
        }
        else if ( !req.body.data ) {
          res.status(400).send("Need valid data payload"); return;
        }

        // route exerciseId to file for conversion aegle
        var aegles = -1;

        switch (req.body.exerciseId) {
          case 100:
            aegles = _steps.conversion(req.body.data); break;
          case 200:
            aegles = _jumping_jacks.conversion(req.body.data); break;
          default:
            res.status(400).send("No valid exerciseId of " + req.body.exerciseId + " found"); return;
        }        

        if (aegles < 0 || aegles == NaN) {
          res.status(400).send("Conversion to aegles failed"); return;
        }

        //
        //
        // TODO - Call Blockchain here
        //
        //
        console.log(req.body.publicKey);
        console.log(aegles);
        res.status(200).send("Success Transaction"); return;
     };
        
})();