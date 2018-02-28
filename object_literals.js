// Enhanced Object literals
function createCoinShop(inventory){
	return {
		inventory,
		inventoryValue(){
			return this.inventory.reduce( (total, book) => total + book.price, 0);
		},
		priceForTitle(title){
			return this.inventory.find( book => book.title === title ).price;
		}
	};
}

const inventory = [
	{ title: 'Bitcoin', price: 8000},
	{ title: 'Litecoin', price: 200},
	{ title: 'ETH', price: 847}
];
const coinShop = createCoinShop(inventory);
console.log(coinShop.inventoryValue());
console.log(coinShop.priceForTitle('Bitcoin'));