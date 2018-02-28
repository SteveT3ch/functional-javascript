var expense = {
	type: 'Business',
	amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount



// Es6 destructor
const { type, amount } = expense;
console.log(`${type} expense equal ${amount}`);
