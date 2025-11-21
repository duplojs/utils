import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getYear", () => {
	it("getYear returns year in UTC", () => {
		const result = DDate.getYear(
			fromIso("2021-01-01T00:00:00.000Z"),
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
			fromIso("2021-01-01T00:00:00.000Z"),
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
			fromIso("1999-12-31T00:00:00.000Z"),
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
			fromIso("-0100-01-01T00:00:00.000Z"),
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
			fromIso("2021-01-01T00:00:00.000Z"),
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
			fromIso("2021-01-01T00:00:00.000Z"),
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
