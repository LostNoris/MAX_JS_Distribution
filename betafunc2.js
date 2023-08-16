inlets = 4;
outlets = 1;

prob0 = 0;
prob1 = 0;
rand1 = [];
rand2 = [];

function anything() {
	if (inlet === 0) {
		rand1 = arrayfromargs(messagename, arguments);
}   else if (inlet === 1) {
	    rand2 = arrayfromargs(messagename, arguments);
}

beta  = Array(rand1.length);

}

function msg_float(value) {
	if (inlet === 2) {
		prob0 = 1 / value;}
		else if (inlet === 3) {
		prob1 = 1 / value;}	
		}
	
function fPower(u, prob) {
	
	if (prob < 0) { sign = -1; }
		else { sign = 1; }
		
	tothe = Math.abs(prob);
	
	result = Math.exp( Math.log(u) * tothe);
	
			if (sign < 0)
			{result = 1 / result;}
				else { result = result;}	
				
					return(result);
					}	
	
function bang() {
	for (i = 0; i < rand1.length; i++)
{
	
			u1 = rand1[i];
			u2 = rand2[i];
			
			t1 = fPower(u1, prob0);
			t2 = fPower(u2, prob1);
			sum = t1 + t2;
			
			beta[i] = t1 / sum;
}
			
			outlet(0, beta);
			}					