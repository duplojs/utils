import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "../utils";

describe("getDayOfWeek", () => {
	it("getDayOfWeek returns day of week in UTC (Friday)", () => {
		const result = DDate.getDayOfWeek(
			fromIso("2021-01-01T00:00:00.000Z"),
		);

		expect(result).toBe(5);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfWeek returns day of week with timezone", () => {
		const result = DDate.getDayOfWeek(
			fromIso("2021-01-01T00:00:00.000Z"),
			"America/New_York",
		);

		expect(result).toBe(4);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfWeek returns day of week in UTC (Sunday)", () => {
		const result = DDate.getDayOfWeek(
			fromIso("2021-01-03T00:00:00.000Z"),
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("getDayOfWeek returns day of week in UTC (Saturday)", () => {
		const result = DDate.getDayOfWeek(
			fromIso("2021-01-02T00:00:00.000Z"),
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
			DDate.getDayOfWeek,
		);

		expect(result).toBe(5);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("use in pipe with timezone", () => {
		const result = pipe(
			fromIso("2021-01-01T00:00:00.000Z"),
			(date) => DDate.getDayOfWeek(date, "America/New_York"),
		);

		expect(result).toBe(4);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
