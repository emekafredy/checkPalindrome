

let textArea = document.querySelector('textarea');
let alertDiv = document.querySelector('#alert-div');
let entries = document.querySelector('#display');
let displayArray = [];




const checkPalindrome = (statement) => {

	statement = textArea.value;
	let pattern = /\W/g;

	let refinedStatement = statement.replace(pattern, '').toLowerCase();

	let reversedStatement = refinedStatement.split('').reverse().join('');

	if (refinedStatement === reversedStatement) {
		alertDiv.innerHTML = `<div class="alert alert-success"> 
														TRUE! "${statement}" spelt backwards (ignoring non-word characters and capitalization) reads the same as forward, so it is a Palindrome 
													</div>`;
	} else {
		alertDiv.innerHTML = `<div class="alert alert-danger">
														FALSE! "${statement}" spelt backwards does not read the same as forward, therefore it is not a Palindrome 
													</div>`;
	}

	displayArray.push(statement);


	if(displayArray.length > 5) {
		displayArray.shift();
	} else {
		displayArray;
	}


	entries.innerHTML = displayArray.reduce((accumulator, value) => {
		return accumulator + `<p> ${value} </p><hr />`
	}, '');

	document.getElementById("text-body").value = "";

}
