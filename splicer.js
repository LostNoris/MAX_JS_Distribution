seq = [];

function msg_int(value) {
	index = value;
}

function anything() {	
	seq = arrayfromargs(messagename, arguments);
}

function bang() {
	
	var rand = Math.random();
	
	seq.splice(index, 1, rand);
	
outlet (0, seq);
}
/* This object takes an array and replaces the element at [index] with 
   a random number. It is used in the PatternChanger Max patch */