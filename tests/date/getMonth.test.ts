import { pipe, type ExpectType, DDate } from "@scripts";

describe("getMonth", () => {
	it("getMonth returns month in UTC (January)", () => {
		const result = DDate.getMonth(
			DDate.create("2021y-1m-1d"),
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
			DDate.create("2021y-12m-25d"),
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
			DDate.create("2021y-1m-1d-0h-0mn"),
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
			DDate.create("2021y-6m-15d"),
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
			(date) => DDate.getMonth(date),
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
			DDate.create("2021y-1m-1d-0h-0mn"),
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
