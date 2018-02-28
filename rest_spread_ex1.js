// Rest and Spread example 2
function alwaysBuyBitcoin(...coins){
	if (coins.indexOf('bitcoin') < 0) {
		return ['bitcoin', ...coins ];
	}
	
	return coins;
}

const haveBitcoin = alwaysBuyBitcoin('bitcoin','eth', 'ltc');
console.log(haveBitcoin);