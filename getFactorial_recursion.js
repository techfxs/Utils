function factorial_recursion(n) {
    if (typeof n !== "number") {
    	console.log('Please provide valid number')
        return;
    }
    if (n === 0) {
        return 1;
    }
    if(n<0){
    	return (n*factorial_recursion(n + 1));	
    }else{
    	return (n*factorial_recursion(n - 1));	    	
    }
    
}

console.log(factorial_recursion(7));