import { pipe, type ExpectType, DDate } from "@scripts";

describe("getYear", () => {
	it("getYear returns year in UTC", () => {
		const result = DDate.getYear(
			DDate.create("2021-01-01"),
		);

		expect(result).toBe(2021);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getYear returns year with timezone", () => {
		const result = DDate.getYear(
			DDate.create("2021-01-01"),
			"America/New_York",
		);

		expect(result).toBe(2020);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getYear returns year in UTC (different year)", () => {
		const result = DDate.getYear(
			DDate.create("1999-12-31"),
		);

		expect(result).toBe(1999);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getYear returns year before Christ", () => {
		const result = DDate.getYear(
			DDate.create("-0100-01-01"),
		);

		expect(result).toBe(-100);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2021-01-01"),
			DDate.getYear,
		);

		expect(result).toBe(2021);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe with timezone", () => {
		const result = pipe(
			DDate.create("2021-01-01"),
			(date) => DDate.getYear(date, "America/New_York"),
		);

		expect(result).toBe(2020);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
