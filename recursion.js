// recusion - calling a function from within it's
// own definition
// The countdown function calls itself until value is zero
const countdown = value => {
	if(value > 0){
		console.log(value);
		return countdown(value - 1);
	}else {
		return value;
	}
};
console.log(countdown(10));