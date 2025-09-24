import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("tomorrow", () => {
	it("should create tomorrow's date", () => {
		const expectedTomorrow = new Date(Date.now() + (((24 * 60) * 60) * 1000));

		const result = DDate.tomorrow();
		const resultDate = DDate.toNative(result);

		expect(resultDate.getFullYear()).toBe(expectedTomorrow.getFullYear());
		expect(resultDate.getMonth()).toBe(expectedTomorrow.getMonth());
		expect(resultDate.getDate()).toBe(expectedTomorrow.getDate());

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("should have valid ISO format", () => {
		const result = DDate.tomorrow();
		const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

		expect(result).toMatch(isoRegex);
		const parsed = DDate.toObject(result);
		expect(parsed.timezone).toBe("Z");

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("should be after today", () => {
		const today = DDate.now();
		const tomorrow = DDate.tomorrow();

		const todayTime = DDate.toTimestamp(today);
		const tomorrowTime = DDate.toTimestamp(tomorrow);

		expect(tomorrowTime).toBeGreaterThan(todayTime);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.tomorrow(),
			DDate.toObject,
			(parsed) => parsed.year,
		);

		const expectedYear = new Date(Date.now() + (((24 * 60) * 60) * 1000)).getFullYear();
		expect(result).toBe(expectedYear);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
