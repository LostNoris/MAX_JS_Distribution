// floating point number to list (array) of random size and consisting of random 
// divisions of the floating point input.
inlets = 4;
outlets = 2;

function msg_int(value) {
	if (inlet === 1) { i = value; }
}
function msg_float(m) {
	if (inlet === 2) { minFloatValue = m; }
		else if (inlet === 3) { maxFloatValue = m; }
	   }
	
function bang() {

  const maxArraySize = 100;
  
  const randomFloatArray = [];
  remainingFloat = i;
  
  while (randomFloatArray.length < maxArraySize 
         && remainingFloat > minFloatValue) 
   {
	if (remainingFloat > maxFloatValue) { maxRealValue = maxFloatValue; }
		else { maxRealValue = remainingFloat; }
	
    randomFloat = Math.random() * (maxRealValue - minFloatValue) + minFloatValue;
        
    randomFloatArray.push(randomFloat);
    remainingFloat -= randomFloat;
   }

   lastFloat = randomFloatArray[randomFloatArray.length - 1];
   lastFloat += remainingFloat;
   randomFloatArray.splice(randomFloatArray.length - 1, 1, lastFloat);

outlet(0, randomFloatArray);
outlet(1, randomFloatArray.length);
  }