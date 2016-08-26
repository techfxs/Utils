//5 --> 1*2*3*4*5

function getFactorial(num){

	if(num < 1 || !num){
		return;
	}

	var f = 1;

	for(var i = num; i > 0; i--){
		f = f*i;
	}
	
	return f;
}

console.log(getFactorial(1));