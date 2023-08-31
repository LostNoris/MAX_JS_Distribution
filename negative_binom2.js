inlets = 4;
outlets = 1;

var values = []; 
var p = 0.5; 
var r = 3; 
var seqLength = 10; 
/* Set some default values for the object so that it automatically
   profuces a viable sequence of data */

function anything() {
    if (inlet === 0) {
        values = arrayfromargs(messagename, arguments);
    }
} // Assign the received array to the values

function msg_float(value) {
    if (inlet === 1) { 
        if (value > 0.89) {
            p = 0.89;
        } else if (value < 0.01) {
            p = 0.01;
        } else {
            p = value;
        }
    } 
} // Assign value to p and bound the variable between 0.01 and 0.89

function msg_int(value) {
    if (inlet === 2) {
            r = value; 
        } /* Assign value to r, r is the total 
          number of failed Bernoulli trails allowed before output */
    else if (inlet === 3) {
        seqLength = value;
    } // Assign vale to seqLength to define length of output sequence
}

function bang() {
    var output = [];
    var x = 0;
    var failures = 0;
    var currentIndex = 0;
    
    for (var i = 0; i < seqLength; i++) {
        x = 0;
        failures = 0;
        
        var u = values[currentIndex];
        currentIndex = (currentIndex + 1) % values.length; // Increment index and wrap
        
        while (failures < r) {
            if (u < p) {
                x++;
            } else {
                failures++;
            }
            u = values[currentIndex];
            currentIndex = (currentIndex + 1) % values.length;
        } /* Carry out Bernoulli trials until failures reaches r
            Output the total number of successful trials 
            use the variable u from the received array of values to carry out trial*/
        
        output.push(x);
    }
    
    outlet(0, output);
}
