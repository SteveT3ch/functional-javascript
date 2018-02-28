// find helper
function findWhere(array, criteria){
	return array.find( arr => {
		let key = Object.keys(criteria)[0];
		console.log(key);
		console.log(arr[key]);
		console.log(criteria[key]);
		return arr[key] === criteria[key]
	});
}

const ladders = [
	{ id: 1, height: 20},
	{ id: 2, height: 30},
	{ id: 3, height: 22},
];

const results = findWhere(ladders, { height: 30});
//console.log(results);