import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getDayOfYear", () => {
	it("getDayOfYear returns day 1 for January 1st", () => {
		const result = DDate.getDayOfYear(
			fromIso("2021-01-01T00:00:00.000Z"),
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
			fromIso("2021-02-01T00:00:00.000Z"),
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
			fromIso("2021-12-31T00:00:00.000Z"),
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
			fromIso("2020-12-31T00:00:00.000Z"),
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
			fromIso("2020-02-29T00:00:00.000Z"),
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
			fromIso("2021-06-15T00:00:00.000Z"),
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
			fromIso("2020-01-01T00:00:00.000Z"),
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
			fromIso("2020-01-01T00:00:00.000Z"),
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
			fromIso("2020-01-01T00:00:00.000Z"),
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
