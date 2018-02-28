// template strings

function getMessage(){
	const year = new Date().getFullYear();
	return `The year is ${year}`;
}

const currentYear = getMessage();
console.log(currentYear);