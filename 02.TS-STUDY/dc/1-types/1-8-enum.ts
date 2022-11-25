{
	/**
	 * Enum
	 */
	// JavaScript
	const MAX_NUM = 6;
	const MAX_STUDENTS_PER_CLASS = 10;
	const MONDAY = 0;
	const TUESDAY = 1;
	const DAYS_ENUM = Object.freeze({
		MONDAY: 0,
		TUESDAY: 1,
	});
	const dayOfToday = DAYS_ENUM.MONDAY; // 0

	// TypeScript
	enum Days {
		Monday, // 0
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		Sunday,
	}
	console.log(Days.Thursday);
	const day = Days.Monday;
}
