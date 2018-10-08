module.exports = class Car {
	constructor(color, convertible) {
		this.color = color;
		this.convertible = convertible;
		this.speed = 0;
	}
	accelerate(up) {
		this.speed += up;
	}
	decelerate(down) {
		this.speed -= down;
	}
}