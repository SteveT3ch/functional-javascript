// rest operator ...
function addNumbers(...numbers){
	return numbers.reduce( (sum, number ) => {
		return sum + number;
	}, 0);
}

console.log(addNumbers(1,2,3,4,5));

// spread operator
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

const allColors = [ ...defaultColors, ...userFavoriteColors ];
console.log(allColors)