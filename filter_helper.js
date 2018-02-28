function reject(array, iteratorFunction) {
	return array.filter(arr => {
			return !iteratorFunction(arr);
	});
}

const numbers = [10, 20, 30];
const lessThanFifteen = reject(numbers, function(number){
	return number > 15
});
console.log(lessThanFifteen);