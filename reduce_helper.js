const primaryColors = [
	{ color: 'red'},
	{ color: 'blue'},
	{ color: 'green'}
];

const results = primaryColors.reduce( (prev, primaryColor) => {
		prev.push(primaryColor.color);
		return prev;
}, [])

console.log(results);