inlets = 4;
outlets = 1;

var values = []; // Array to store the received random numbers
var p = 0.5; // Default value for p
var r = 3; // Default value for r
var seqLength = 10; // Default sequence length

function anything() {
    if (inlet === 0) {
        // Assign the received array to the 'values' array
        values = arrayfromargs(messagename, arguments);
    }
}

function msg_float(value) {
    // input p value must be between 0.99 and 0.01
    if (inlet === 1) { 
        if (value > 0.89) {
            p = 0.89;
        } else if (value < 0.01) {
            p = 0.01;
        } else {
            p = value;
        }
    }
}

function msg_int(value) {
    // input r value must be between 1 and 16
    if (inlet === 2) {
            r = value;
        }
    else if (inlet === 3) {
        seqLength = value;
    }
}

function bang() {
    var output = [];
    var x = 0;
    var failures = 0;
    var currentIndex = 0; // Track the current index in the 'values' array
    
    for (var i = 0; i < seqLength; i++) {
        x = 0;
        failures = 0;
        
        var u = values[currentIndex];
        currentIndex = (currentIndex + 1) % values.length; // Increment the index and wrap around
        
        while (failures < r) {
            if (u < p) {
                x++;
            } else {
                failures++;
            }
            u = values[currentIndex];
            currentIndex = (currentIndex + 1) % values.length; // Increment the index and wrap around
        }
        
        output.push(x);
    }
    
    outlet(0, output);
}
