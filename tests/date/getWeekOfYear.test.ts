import { pipe, type ExpectType, DDate } from "@scripts";

describe("getWeekOfYear", () => {
	it("getWeekOfYear returns week 53 for January 1st 2021", () => {
		const result = DDate.getWeekOfYear(
			DDate.create("2021y-1m-1d"),
		);

		expect(result).toBe(53);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getWeekOfYear returns week 1 for January 4th 2021", () => {
		const result = DDate.getWeekOfYear(
			DDate.create("2021y-1m-4d"),
		);

		expect(result).toBe(1);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getWeekOfYear returns week 1 for January 1st 2024", () => {
		const result = DDate.getWeekOfYear(
			DDate.create("2024y-1m-1d"),
		);

		expect(result).toBe(1);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getWeekOfYear returns week 52 for December 31st 2021", () => {
		const result = DDate.getWeekOfYear(
			DDate.create("2021y-12m-31d"),
		);

		expect(result).toBe(52);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getWeekOfYear returns correct week for mid-year date", () => {
		const result = DDate.getWeekOfYear(
			DDate.create("2021y-6m-15d"),
		);

		expect(result).toBe(24);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getWeekOfYear returns week 53 for December 31st 2020", () => {
		const result = DDate.getWeekOfYear(
			DDate.create("2020y-12m-31d"),
		);

		expect(result).toBe(53);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getWeekOfYear with timezone", () => {
		const result = DDate.getWeekOfYear(
			DDate.create("2021y-1m-4d-0h-0mn"),
			"America/New_York",
		);

		expect(result).toBe(53);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2021y-1m-4d"),
			DDate.getWeekOfYear,
		);

		expect(result).toBe(1);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe with timezone", () => {
		const result = pipe(
			DDate.create("2021y-1m-4d-0h-0mn"),
			(date) => DDate.getWeekOfYear(date, "America/New_York"),
		);

		expect(result).toBe(53);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
