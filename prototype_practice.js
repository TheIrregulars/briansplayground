function Dog (breed) {
	this.breed = breed;
};
var buddy = new Dog("pug");
Dog.prototype.bark = function() {
	console.log("woof woof! (I love you!)")
};
buddy.bark();
var bandit = new Dog("black pug");
bandit.bark();