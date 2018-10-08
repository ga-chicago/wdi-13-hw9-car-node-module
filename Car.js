module.exports = class Car {
	constructor(color, convertible) {
		this.color = color;
		this.convertible = convertible;
		this.speed = 0;
	},
	decelerate(speed) {
		this.speed -= speed;
	},
	accelerate(speed) {
		this.speed -= speed;
	}

}