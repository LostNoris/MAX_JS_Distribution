var x = 0;
var values = [];

function anything() { 
	values = arrayfromargs(messagename, arguments);
}

function msg_float(value) { 
	x = value; }

function bang(){
	
	results = [];
	
	for (i = 0; i < values.length; i++) {
	
	flip = values[i];
	
	result = flip >= x;
	
	results.push(result);
	
}
	
	outlet (0, results);
}