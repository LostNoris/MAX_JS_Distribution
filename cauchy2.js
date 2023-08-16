inlets = 3;
outlets = 2;
	
var values = [];
spread = 0;
offset = 0;

function anything() {
	if (inlet === 0) {
		// Assign the received array to the 'values' array
		values = arrayfromargs(messagename, arguments);
	}
}

function msg_float(value) {
    if (inlet === 1) {
// Assign inlet 1 value to the variable 'spread'
        spread = value;}
    else if (inlet === 2) {
	    offset = value;}
}


function bang() {
	
	for (i = 0; i < values.length; i++) 
{   
	rand = values[i];
		
	cauchy = Math.tan(rand * 3.141593) * spread;	
	
	if (cauchy < -500) {cauchy = -500}
		else if (cauchy > 500) {cauchy = 500}
			
	values[i] = cauchy + offset;
}
		
	outlet(0, values);
	outlet(1, values.length);
	}
	


			
