inlets = 3;
outlets = 1;

mean = 0;
disp = 0;

function msg_float(value) 
   {
	if (inlet === 1) {
		mean = value;
		}
		else if (inlet === 2) {
			disp = value;
			}
	}
	
function bang()
   {
	u = Math.random();
	l = -1 * Math.log(1 / u - 1);
	
	result = (-mean) * l / disp;

	outlet(0, result);
   }