import { pipe, type ExpectType, DDate } from "@scripts";

describe("getDayOfWeek", () => {
	it("getDayOfWeek returns day of week in UTC (Friday)", () => {
		const result = DDate.getDayOfWeek(
			DDate.create("2021-01-01"),
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
			DDate.create("2021-01-01"),
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
			DDate.create("2021-01-03"),
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
			DDate.create("2021-01-02"),
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
			DDate.create("2021-01-01"),
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
			DDate.create("2021-01-01"),
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
