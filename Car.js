// In the Car.js file:

// Users should be able to define the following properties of a new car:

// color
// convertible (boolean)
// Cars should automatically come with the following property:

// speed (0, at first)
// Functions specs:

// include accelerate and decelerate
// these should take one argument, the speed, and add or substract it the from the current speed

module.exports = class Car {
	constructor (color, convertible){
		this.color = color;
		this.convertible = convertible;
		this.speed = 0;
	}

	accelerate(a){
		this.speed+=a;
	}

	decelerate(d){
		this.speed-=d;
	}
}


