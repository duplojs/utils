import { pipe, type ExpectType, DDate } from "@scripts";

describe("getYear", () => {
	it("getYear returns year in UTC", () => {
		const result = DDate.getYear(
			DDate.create("2021y-1m-1d"),
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
			DDate.create("2021y-1m-1d-0h-0mn"),
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
			DDate.create("1999y-12m-31d"),
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
			DDate.create("-100y-1m-1d"),
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
			DDate.create("2021y-1m-1d"),
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
			DDate.create("2021y-1m-1d-0h-0mn"),
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
