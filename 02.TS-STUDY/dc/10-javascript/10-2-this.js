console.log(this); // window

function simpleFunction() {
	console.log(this); // window
}
simpleFunction();

console.clear();

class Counter {
	count = 0;

	increase = () => {
		console.log(this);
	};
}

const counter = new Counter();
counter.increase(); // Counter
// const caller = counter.increase;
const caller = counter.increase.bind(counter);
caller(); // undefined

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
