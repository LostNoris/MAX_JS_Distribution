inlets = 3;
outlets = 1;

function msg_float (value) {
	if (inlet === 1) { 
      if (value > 0.99) { p = 0.99 }
	    else if (value < 0.01 ) { p = 0.01 }
             else { p = value }
     } // Assign value to p and bound the variable between 0.01 and 0.99
}

function msg_int (value) {
	if (inlet === 2) { r = value }} /* Assign value to r
 r is the total number of failed Bernoulli trails allowed before output */

function bang () {
	
	var x = 0;
    var failures = 0;
	
    while (failures < r) 
       {
        if (Math.random() < p) { x++; } 
            else { failures++; }
       } 
/* Carry out Bernoulli trials until failures reaches r
   Output the total number of successful trials */
    outlet(0, x);
}