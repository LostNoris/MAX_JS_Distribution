/* Program to perform bernoulli trials on a received array of numbers 
   between 0. and 1. returns an equal sized array of the boolean result for each bernoulli trial */
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
/* Iterate through the array of numbers adding result of Bernoulli trails to the results array */
	outlet (0, results);
}