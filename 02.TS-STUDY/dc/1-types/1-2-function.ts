{
	// JavaScript :(
	function jsAdd(num1, num2) {
		return num1 + num2;
	}

	// TypeScript :)
	function add(num1: number, num2: number): number {
		return num1 + num2;
	}

	// JavaScript
	function jsFetchNum(id) {
		// ...
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}

	// TypeScript
	function tsFetchNum(id: string): Promise<number> {
		// ...
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}

	// JavaScript -> TypeScript
	// Optional Parameter
	function printName(firstName: string, lastName?: string) {
		console.log(firstName);
		console.log(lastName); // undefined
	}

	printName('Steve', 'Jobs');
	printName('Ellie');
	printName('Anna', undefined);

	// Default Parameter
	function printMessage(message: string = 'default message') {
		console.log(message);
	}

	printMessage(); // 기본 값으로 전달됨

	// Rest Parameter
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b);
	}

	console.log(addNumbers(1, 2));
	console.log(addNumbers(1, 2, 3, 4));
	console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
