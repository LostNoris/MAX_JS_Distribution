/* Code to generate a single random number, that when collected into an array 
   will display the Poisson distribution. Mathematics and main functions taken
   from 'Computer Music in C' translated to Javascript and formatted for Max */
inlets = 2;
outlets = 1;

spread = 0;

function msg_float(value) {
	spread = value;
	} //assign to the variable spread 
	
function bang() {
	
	var num = 0;
	
	u = Math.random();
	t = Math.exp(-spread);
/* Generate a random number assigned to u
   Find the exponent of the value of spread, assign to variabl t */
	while (u > t)
	{
		num += 1;
		u = u * Math.random();
		} 
/* Loop while the value of u is lower than t, increment num
   Multiply u by another random number between 0. and 1.
   (The loop will iteratively decrease the value of u untill it ends) */		
		
	if (num < 1) {
		result = 1; }
		else if (num > 16) {
			result = 16;} 
           else { result = num; }
/* 	Output num, the number of time the previous while loop iterates before 
    ending. Artificial bounds of 1 - 16 have been placed on the output values */		
					
	outlet(0, result); 
	}