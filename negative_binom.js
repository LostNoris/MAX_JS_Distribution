inlets = 3;
outlets = 1;

function msg_float (value) {
// input p value must be between 0.99 and 0.01
	if (inlet === 1) { 
      if (value > 0.99) { p = 0.99 }
	    else if (value < 0.01 ) { p = 0.01 }
             else { p = value }
     }
}

function msg_int (value) {
// input r value is number of attempts so not too high please or it will crash
	if (inlet === 2) { r = value }}

function bang () {
	
	var x = 0;
    var failures = 0;
	
    while (failures < r) 
       {
        if (Math.random() < p) { x++; } 
            else { failures++; }
       }
  
    outlet(0, x);
}