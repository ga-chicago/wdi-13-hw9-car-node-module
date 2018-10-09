module.exports = class Car {
	constructor(color,convertible,speed) {
		this.color = color;
		this.convertible = convertible;
		this.speed = 0;
	}
	accelerate(delta) {
		this.speed += delta;
	}
	decelerate(delta) {
		this.speed -= delta;
	}
}