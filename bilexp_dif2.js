inlets = 2;
outlets = 1;

spread = 0.01;
values = [];

function anything() {
	if (inlet === 0) {
		// Assign the received array to the 'values' array
		values = arrayfromargs(messagename, arguments);
	}
}

function msg_float(value) {
	if (inlet === 1) { 
         spread = value; 
    }
}

function bang() {
	for (i = 0; i < values.length; i++) {
		u = values[i];

		if (u < 0.01) {
			u = 0.01;
		} else if (u > 0.99) {
			u = 0.99;
		}

/* This version of the bilexp file has a single line of code removed
for differing behaviour, simply removing (u *= 2.;) from this section of the file.  
*/
		if (u > 1) {
			u = 2 - u;
			u = -1 * Math.log(u);
			u = u / spread;
		} else {
			u = Math.log(u);
			u = u / spread;
		}
		values[i] = u;
	}

	outlet(0, values);
}