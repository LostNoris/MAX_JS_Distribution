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
 }

function bang() {
	
	const num = 12;
    const halfnum = num / 2;
    const scale = 1;
    var sum = 0;
	
	for (var i = 0; i < num; i++)
	{
		u = Math.random();
		sum = sum + u;
	}
	
	result = dev * scale * (sum - halfnum) + mean;
	
	outlet(0, result);
	}