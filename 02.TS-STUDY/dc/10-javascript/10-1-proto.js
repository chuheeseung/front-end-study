const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.__proto__ === y.__proto__); // Object

const array = [];
console.log(array);
// Array -> Object

console.clear();

function CoffeeMachine(beans) {
	this.beans = beans;

	// Instance member level
	// this.makeCoffee = (shots) => {
	// 	console.log('making...');
	// };
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
	console.log('making...');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
	this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
// LatteMachine -> CoffeeMachine -> Object
// 프로토타입을 연결해준 것

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();

/**
 * Prototype
 * Js에서 객체지향 상속을 하기 위해 사용
 * 코드를 재사용하기 위함
 */
