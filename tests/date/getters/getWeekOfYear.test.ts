import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getWeekOfYear", () => {
	it("getWeekOfYear returns week 53 for January 1st 2021", () => {
		const result = DDate.getWeekOfYear(
			fromIso("2021-01-01T00:00:00.000Z"),
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
			fromIso("2021-01-04T00:00:00.000Z"),
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
			fromIso("2024-01-01T00:00:00.000Z"),
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
			fromIso("2021-12-31T00:00:00.000Z"),
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
			fromIso("2021-06-15T00:00:00.000Z"),
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
			fromIso("2020-12-31T00:00:00.000Z"),
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
			fromIso("2021-01-04T00:00:00.000Z"),
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
			fromIso("2021-01-04T00:00:00.000Z"),
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
			fromIso("2021-01-04T00:00:00.000Z"),
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
