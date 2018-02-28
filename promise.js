// promises
let promise = new Promise((resolve, reject) => {
	reject();
})
	.then(() => console.log('Ok'))
	.catch(() => console.log('Failed'));


