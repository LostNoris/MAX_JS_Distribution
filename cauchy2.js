inlets = 3;
outlets = 2;
	
var values = [];
spread = 0;
offset = 0;

function anything() {
	if (inlet === 0) {
		values = arrayfromargs(messagename, arguments);
	} // Assign the received array to the values array
}

function msg_float(value) {
    if (inlet === 1) {spread = value;} // Assign inlet 1 value to the variable spread
    else if (inlet === 2) {
	    offset = value;} // Assign inlet 2 value to the variable offset
}


function bang() {
	
	for (i = 0; i < values.length; i++) 
{   
	rand = values[i];// Changes value of rand to the current index in the received array
		
	cauchy = Math.tan(rand * 3.141593) * spread;// Generate number in the Cauchy distribution
	
	if (cauchy < -500) {cauchy = -500;}
		else if (cauchy > 500) {cauchy = 500;} // Set artificial bounds on the numbers
			
	values[i] = cauchy + offset; // Add offset to cauchy to generate final value
}
		
	outlet(0, values);
	outlet(1, values.length);
	}
	


			
