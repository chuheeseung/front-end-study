{
	/**
	 * Type Assertions :(
	 */
	function jsStrFunc(): any {
		return 'hello';
	}
	const result = jsStrFunc();
	console.log((result as string).length);
	console.log((<string>result).length);

	const wrong: any = 5;
	console.log((wrong as Array<number>).length); // error
}
