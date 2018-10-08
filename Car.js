
// your task is to make a module (Car.js) that defines a car class – with both properties and methods (functions) – and exports it as a module.
// In the Car.js file:
// Users should be able to define the following properties of a new car:
module.exports = class Car {
	constructor(color, convertible) {
// color
		this.color = color;
// convertible (boolean)
		this.convertible = convertible;
// speed (0, at first)
		this.speed = 0;
	}
	accelerate(up) {
		this.speed += up;
//include accelerate and decelerate
//these should take one argument, the speed, and add or substract it the from the current speed
	}
	decelerate(down) {
		this.speed -= down;
	}
}