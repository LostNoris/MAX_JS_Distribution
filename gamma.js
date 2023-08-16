function msg_int(value) 
{
	if (value < 1) { spread = 1;}
	else { spread = value;}
}

function bang() {
	
sum = 1.0;
	
	for (i =0; i < spread; i++)
{
		u = Math.random();
		sum = sum * u;
}

result = -1 * Math.log(sum);

outlet (0, result);
}