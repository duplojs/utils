import { pipe, type ExpectType, DDate } from "@scripts";

describe("getDayOfYear", () => {
	it("getDayOfYear returns day 1 for January 1st", () => {
		const result = DDate.getDayOfYear(
			DDate.create("2021y-1m-1d"),
		);

		expect(result).toBe(1);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfYear returns day 32 for February 1st", () => {
		const result = DDate.getDayOfYear(
			DDate.create("2021y-2m-1d"),
		);

		expect(result).toBe(32);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfYear returns day 365 for December 31st (non-leap year)", () => {
		const result = DDate.getDayOfYear(
			DDate.create("2021y-12m-31d"),
		);

		expect(result).toBe(365);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfYear returns day 366 for December 31st (leap year)", () => {
		const result = DDate.getDayOfYear(
			DDate.create("2020y-12m-31d"),
		);

		expect(result).toBe(366);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfYear returns day 60 for February 29th (leap year)", () => {
		const result = DDate.getDayOfYear(
			DDate.create("2020y-2m-29d"),
		);

		expect(result).toBe(60);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfYear returns correct day for mid-year date", () => {
		const result = DDate.getDayOfYear(
			DDate.create("2021y-6m-15d"),
		);

		expect(result).toBe(166);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfYear with timezone", () => {
		const result = DDate.getDayOfYear(
			DDate.create("2020y-1m-1d-0h-0mn"),
			"America/New_York",
		);

		expect(result).toBe(365);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2020y-1m-1d"),
			DDate.getDayOfYear,
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
			DDate.create("2020y-1m-1d-0h-0mn"),
			(date) => DDate.getDayOfYear(date, "America/New_York"),
		);

		expect(result).toBe(365);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
