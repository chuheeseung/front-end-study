{
	function checkNotNullBad(arg: number | null): number {
		if (arg === null) {
			throw new Error('Not valid number');
		}
		return arg;
	}

	function checkNotNullAnyBad(arg: any | null): any {
		// any -> 안전하지 않음
		if (arg === null) {
			throw new Error('Not valid number');
		}
		return arg;
	}

	const result = checkNotNullAnyBad(123);

	function checkNotNull<T>(arg: T | null): T {
		if (arg === null) {
			throw new Error('Not valid number');
		}
		return arg;
	}

	const number = checkNotNull(123);
	const bool: boolean = checkNotNull(true);
}
