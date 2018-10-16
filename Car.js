module.exports = class Car {

	constructor(color, convertible){
		this.color = color;
		this.convertible = convertible;
		this.speed = 0;
	}

	accelerate(x){
		this.speed += x;
	}

	decelerate(x){
		this.speed -= x;
	}

};
