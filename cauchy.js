inlets = 2;
outlets = 2;	

spread = 0;

function msg_float(value) {
    // Set the spread value as the new value
  spread = value;
}
//receive bang, generate number between 0.01 and 0.99
function bang() {
	
	const rand = Math.random();
	
	if (rand = 0) {
		rand = rand + 0.01}	
		else if (rand = 1) {
			rand = rand - 0.01}
		
	cauchy = Math.tan(rand * 3.141593) * spread;	
	
	if (cauchy < -500) {cauchy = -500}
		else if (cauchy > 500) {cauchy = 500}
		
	outlet(0, cauchy);
	outlet(1, rand);
	}
	


			
