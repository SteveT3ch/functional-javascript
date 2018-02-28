// class es6
class Car {
	constructor({title, cost}){
		this.title = title;
		this.cost = cost;
	}
	
	drive(){
		return 'vroom';
	}
}

// inheritance

class Toyota extends Car {
	constructor(options){
		super(options);
		this.color = options.color;
	}
	honk(){
		return 'beep';
	}
}

const myCar = new Car({ title: 'Benz', cost: '90K'});
console.log(`my ${myCar.title} is ${myCar.cost} and went ${myCar.drive()}`);