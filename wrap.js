function msg_float(value) {
	input = value;
    maxx = 100;
    min = -100;
    range = (maxx - min) + 1;

    if (input > maxx) {
        outlet(0, input % (maxx - min + 1) + min);
}
      else if (input < min) {
           outlet(0, input % (maxx - min + 1) + maxx);
}
           else {
                 outlet(0, input);
}
}
/* An object used for wraping values within a given range.
   This is as an alternative to having a Max abstraction that performs 
   the same basic function */