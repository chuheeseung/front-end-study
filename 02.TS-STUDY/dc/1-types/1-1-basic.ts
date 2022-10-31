{
	// JavaScript

	// let es6
	let name = 'hello';
	name = 'hi';

	// const
	const age = 5;
	// age = 1;
}

{
	/**
	 * JavaScript
	 * Primitive
	 * Object: function, array, ...
	 */

	// number
	const num: number = 1;

	// string
	const str: string = 'hello';

	// boolean
	const bool: boolean = false;

	// undefined : 값이 있는지 없는지 결정되지 않은 상태
	let name: undefined; // :(
	let age: number | undefined; // optional type; 보통 얘를 이용
	age = undefined;
	age = 5;

	function find(): number | undefined {
		return undefined;
	}

	// null : 값이 없다고 나타내는 상태
	let person: null; // :(
	let person2: string | null;

	// unknown 어떤 종류의 데이터가 담겼는지 알 수 없는 경우; :(
	let notSure: unknown;
	notSure = 'he';
	notSure = true;

	// any : 모든 타입을 담을 수 있음 :(
	let anything: any;
	anything = 0;
	anything = 'hello';

	// void : 함수에서 아무것도 리턴하지 않는 경우
	function print(): void {
		console.log('hello');
	}

	// never : 함수에서 아무것도 절대 리턴하지 않는 경우
	function throwError(message: string): never {
		// message -> server (log)
		throw new Error(message);

		while (true) {}
	}

	// objet
	let obj: object; // :(
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: 'ellie' });
	acceptSomeObject({ animal: 'dog' });
}
