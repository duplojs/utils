import { pipe, type ExpectType, DDate } from "@scripts";

describe("getDayOfWeek", () => {
	it("getDayOfWeek returns day of week in UTC (Friday)", () => {
		const result = DDate.getDayOfWeek(
			DDate.create("2021y-1m-1d"),
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
			DDate.create("2021y-1m-1d-0h-0mn"),
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
			DDate.create("2021y-1m-3d"),
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
			DDate.create("2021y-1m-2d"),
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
			DDate.create("2021y-1m-1d"),
			(date) => DDate.getDayOfWeek(date),
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
			DDate.create("2021y-1m-1d-0h-0mn"),
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
