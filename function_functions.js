// Break functionality to not repeat functions
// function returns a function solve problem
const swapCoins = (original, replacement) => {
	return function(source){
		return source.replace(original, replacement);
	};
};

const likeBitcoin = swapCoins(/bitcoin cash/ig, 'Bitcoin');
console.log(likeBitcoin("bitcoin cash is the best"));

const likeLitecoin = swapCoins(/bitcoin cash/ig, 'Litecoin');
console.log(likeLitecoin('Bitcoin cash is the best'));