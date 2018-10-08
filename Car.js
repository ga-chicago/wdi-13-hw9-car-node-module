class Car {
	constructor(color, convertible) {
		this.color = color;
		this.convertible = convertible;
		this.speed = 0;
	}
	accelerate(gas) {
		this.speed += gas
	}
	decelerate(brake) {
		this.speed -= brake;
	}
}

module.exports = Car