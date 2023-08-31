/* A more or less direct translation of C code from Algosome Blog,
   formatted to work within Max, see references in commentary */
inlets = 3;
outlets = 3;

function msg_float(value) {
	if (inlet === 0) { x = value; }
     else if (inlet === 1) { y = value; }
	      else if (inlet === 2) { z = value; }
		}
		
function bang() {
	
 const b = 28.0;
 const c = 8.0 / 3.0;
 const t = 0.01;
	
 var iterations = 1000;

 var a = 10;
 const lorenzX = [];
 const lorenzY = [];
 const lorenzZ = [];

for ( i = 0; i < iterations; i++) {
	
	xt = x + t * a * (y - x);
    yt = y + t * (x * (b - z) - y);
	zt = z + t * (x * y - c * z);
	
	x = xt;
	y = yt;
	z = zt;
	
	lorenzX.push(x);
	lorenzY.push(y);
	lorenzZ.push(z);
	}
	
outlet(0, lorenzX);
outlet(1, lorenzY);
outlet(2, lorenzZ);
}