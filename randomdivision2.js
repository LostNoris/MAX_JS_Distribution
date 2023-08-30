/* This object takes an integer and iteratively subtracts random numbers generated
between the bounds specified by the inlets 2 and 3, all of the randdom numbers are then stored
in an array which will be equal in total to the initial integer */
inlets = 4;
outlets = 2;

function msg_int(value) {
	if (inlet === 1) { i = value; } // Value assigned to i (equal to the size of the output array in ms)
}
function msg_float(m) {
	if (inlet === 2) { minFloatValue = m; }// Minimum size of elements in the array in ms
		else if (inlet === 3) { maxFloatValue = m; }// Maximum size of elements in the array in ms
	   }
	
function bang() {

  const maxArraySize = 256;//Default maximum size of Max objects dealing with lists (multislider and zl objects)
  const randomFloatArray = [];//initialize the output array
  var remainingFloat = i;// Variable to keep track of the size of the initial value as it is subtracted
  
  while (randomFloatArray.length < maxArraySize && remainingFloat > minFloatValue)   
  /* create a loop that only finishes if the size of the array reaches its maximum and 
     if the minimum float value is larger than the remaining float */
   {
	if (remainingFloat > maxFloatValue) { realValue = maxFloatValue; }
		else { maxRealValue = remainingFloat; }
  /* This if/else statement sets the value of realValue to deal with cases where 
     the remaining float value becomes lower than the maximum allowed value for generated floats*/
	
    randomFloat = Math.random() * (realValue - minFloatValue) + minFloatValue;//Generate random float within bounds
        
    randomFloatArray.push(randomFloat);//Push generated value to the array
    remainingFloat -= randomFloat;//Subtract generated number from remaining float
   }

   lastFloat = randomFloatArray[randomFloatArray.length - 1];
   lastFloat += remainingFloat;
   randomFloatArray.splice(randomFloatArray.length - 1, 1, lastFloat);
  /*  These three lines ensure that the final sum of all elements in the array equal the initial i value
      by adding the final remainingFloat value to the value of the last element in the array */

outlet(0, randomFloatArray);
outlet(1, randomFloatArray.length);
}