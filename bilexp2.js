/* Program for trandforming array of numbers between 0. and 1. into an
   array displaying the bilateral exponential ditribution, mathematical functions
   taken from 'Computer Music in C' pp 184 */
inlets = 2;
outlets = 1;

spread = 0.01;
values = [];

function anything() {
	if (inlet === 0) {
		values = arrayfromargs(messagename, arguments);
	} // Assign the received array to the values array
}

function msg_float(value) {
	if (inlet === 1) { 
         spread = value; 
    } // Assign inlet 1 value to the variable spread
}

function bang() {
	for (i = 0; i < values.length; i++) {
		u = values[i];

		if (u < 0.01) {
			u = 0.01;
		} else if (u > 0.99) {
			u = 0.99;
		} // Ensure that the value of u is between 0.01 and 0.99

		u *= 2.; // multiply the value of u by 2.

		if (u > 1) {
			u = 2 - u;
			u = -1 * Math.log(u);
			u = u / spread;
		} else {
			u = Math.log(u);
			u = u / spread;
		} 
		values[i] = u;
	} /* interate through values array, first multiplying the value of u by 2, 
	If the new value of u is greater than 1, finding the negative log of (2 - u)
    and divide by spread.
	If the value is less than 1, find the log and divide by spread. */	
	outlet(0, values);
}