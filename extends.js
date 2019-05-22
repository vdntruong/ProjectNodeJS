class Dog {
	constructor(dogName) {
		this.dogName = dogName;
	}
	showDogName() {
		console.log(this.dogName);
	}
}
class BullDog extends Dog {
	constructor(dogName, age) {
		super(dogName);
		this.age = age;
	}
	showNameClass() {
		console.log(this.name);
	}
}

const a = new BullDog('Pull', 2);
