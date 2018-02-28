class Monster {
	constructor(options) {
		this.health = 100;
		this.name = options.name;
	}
}

class Snake extends Monster {
		constructor(options){
				super(options);
		}
		bite(options){
				return options.health -= 10
		}
}

const mona = new Snake({name:'mona'});
console.log(mona.health)
const cool = new Snake({name:'cool'});
console.log(cool.health);
console.log(mona.bite(cool));