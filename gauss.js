/* Code for generating random numbers with a Gaussian distribution 
   mathematical functions of the code found in 'Computer Music in C' pp 190 */
inlets = 3;
outlets = 1;

var mean = 0;
var dev = 0;

function msg_float(value) {
	
if (inlet === 1) {
	mean = value;}
	else if (inlet === 2) {
    dev = value;
    }                    
 } // Assign inlets 1 & 2 to the variables mean and dev.

function bang() {
	
	const num = 12;
    const halfnum = num / 2;
    const scale = 1;
    var sum = 0;
/* The variables num and scale are set to their default values 
   found in the code in 'Computer Music in C' */
	for (var i = 0; i < num; i++)
	{
		u = Math.random();
		sum = sum + u;
	}
/*  Iterative process to generate the value of sum by adding multiple 
    random order numbers */	
	result = dev * scale * (sum - halfnum) + mean;
/*  Produce a single number, that when grouped with others generated using 
    this object and the same parameters will tend to a Gaussian distribution */
	outlet(0, result);
	}