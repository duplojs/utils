import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getMonth", () => {
	it("getMonth returns month in UTC (January)", () => {
		const result = DDate.getMonth(
			fromIso("2021-01-01T00:00:00.000Z"),
		);

		expect(result).toBe(1);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getMonth returns month in UTC (December)", () => {
		const result = DDate.getMonth(
			fromIso("2021-12-25T00:00:00.000Z"),
		);

		expect(result).toBe(12);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getMonth returns month with timezone", () => {
		const result = DDate.getMonth(
			fromIso("2021-01-01T00:00:00.000Z"),
			"America/New_York",
		);

		expect(result).toBe(12);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getMonth returns month in UTC (June)", () => {
		const result = DDate.getMonth(
			fromIso("2021-06-15T00:00:00.000Z"),
		);

		expect(result).toBe(6);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			fromIso("2021-01-01T00:00:00.000Z"),
			DDate.getMonth,
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
			fromIso("2021-01-01T00:00:00.000Z"),
			(date) => DDate.getMonth(date, "America/New_York"),
		);

		expect(result).toBe(12);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
