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