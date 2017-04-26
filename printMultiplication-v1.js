/** @function printMultiplicationTable
	*
	* prints multiplication table for a given input and number of rows.
	*
	*/
function printMultiplicationTable(input, rows) {

  if (typeof input !== 'number' || input === Infinity || input === -Infinity || input === NaN) {
    console.error('Not a valid input'); return;
  }

  var outputString = '', i = 1;
  rows = rows || 10;

  while (i <= rows) {
    outputString += input + 'X' + i + '=' + (input * i) + '\n';
    i++;
  }
  return outputString;
}

console.log(printMultiplicationTable(3, 20));
