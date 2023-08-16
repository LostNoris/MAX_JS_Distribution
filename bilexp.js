inlets = 2;
outlets = 1;

spread = 0.01;

function msg_float(value) {
	spread = value;
         }

function bang() 
{
	
	u = Math.random() * 2;
	
if (u > 1) 
       {	
    	u = 2 - u;
	    u = -1 * Math.log(u);
    	u = u / spread;
       }
else
       {
	    u = Math.log(u);
	    u = u / spread;
	   }
	
	outlet(0, u);
}
	            
	