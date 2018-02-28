const timer = setInterval(
	() => console.log(new Date().toLocaleTimeString()), 1000);
	
setTimeout( () => clearInterval(timer), 4000);