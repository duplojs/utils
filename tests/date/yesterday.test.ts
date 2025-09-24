import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("yesterday", () => {
	it("should create yesterday's date", () => {
		const today = new Date();
		const expectedYesterday = new Date(today.getTime() - (((24 * 60) * 60) * 1000));

		const result = DDate.yesterday();
		const resultDate = DDate.toNative(result);

		expect(resultDate.getFullYear()).toBe(expectedYesterday.getFullYear());
		expect(resultDate.getMonth()).toBe(expectedYesterday.getMonth());
		expect(resultDate.getDate()).toBe(expectedYesterday.getDate());

		type check = ExpectType<
			typeof result,
			DDate.NewDate,
			"strict"
		>;
	});

	it("should have valid ISO format", () => {
		const result = DDate.yesterday();
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

	it("should be before today", () => {
		const today = DDate.now();
		const yesterday = DDate.yesterday();

		const todayTime = DDate.toTimestamp(today);
		const yesterdayTime = DDate.toTimestamp(yesterday);

		expect(yesterdayTime).toBeLessThan(todayTime);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.yesterday(),
			DDate.toObject,
			(parsed) => parsed.year,
		);

		const expectedYear = new Date(Date.now() - (((24 * 60) * 60) * 1000)).getFullYear();
		expect(result).toBe(expectedYear);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
