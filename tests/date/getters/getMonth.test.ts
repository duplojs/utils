import { pipe, type ExpectType, DDate } from "@scripts";

describe("getMonth", () => {
	it("getMonth returns month in UTC (January)", () => {
		const result = DDate.getMonth(
			DDate.create("2021-01-01"),
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
			DDate.create("2021-12-25"),
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
			DDate.create("2021-01-01"),
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
			DDate.create("2021-06-15"),
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
			DDate.create("2021-01-01"),
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
