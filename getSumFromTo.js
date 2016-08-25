function getSumFromTo(from, to){
	
	var startNum = from;
	var endNum = to;
	var i = 0;

	if(startNum > endNum){
		startNum = endNum;
		endNum = from;
	}

	while(startNum <= endNum) {
		i = i+startNum;
		startNum++;
	}
	return i;
}
var s = getSumFromTo(1,5);
console.log(s);