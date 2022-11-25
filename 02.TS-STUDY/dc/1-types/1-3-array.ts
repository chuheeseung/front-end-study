{
	// Array
	const fruits: string[] = ['🍅', '🍌'];
	const scores: Array<number> = [1, 3, 4];

	function printArray(fruits: readonly string[]) {} // readonly : 변경 불가

	// Tuple :( 사용 권장 X -> interface, type alias, class로 대체
	let student: [string, number];
	student = ['name', 123];
	student[0]; // name
	student[1]; // 123
	const [name, age] = student;
}
