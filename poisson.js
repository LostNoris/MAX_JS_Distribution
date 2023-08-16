inlets = 2;
outlets = 1;

spread = 0;

function msg_float(value) {
	spread = value;
	} 
// read float and assign to the variable spread 
	
function bang() {
	
	var num = 0;
	
	u = Math.random();
	t = Math.exp(-spread);
	
	while (u > t)
	{
		num = num + 1;
		u = u * Math.random();
		} 
		
// mathematics for generating poisson distribution as translated from 
// 'computer music in C' C code into JS		
		
	if (num < 1) {
		result = 1; }
		else if (num > 15) {
			result = 15;} 
           else { result = num; }
// set bounds for random number between 1 and 15			
					
	outlet(0, result); 
	}