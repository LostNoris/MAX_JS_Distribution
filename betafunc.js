inlets = 3;
outlets = 1;

prob0 = 0;
prob1 = 0;

function msg_float(value) {
	if (inlet === 1) {
		prob0 = 1 / value;}
		else if (inlet === 2) {
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
	
			u1 = Math.random();
			u2 = Math.random();
			
			t1 = fPower(u1, prob0);
			t2 = fPower(u2, prob1);
			sum = t1 + t2;
			
			beta = t1 / sum;
			
			outlet(0, beta);
			}					