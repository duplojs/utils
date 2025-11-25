import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractWeeks", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-15");

	it("subtracts weeks from a date", () => {
		const result = DDate.subtractWeeks(
			baseDate,
			1,
		);

		expect(result).toBe(DDate.create("2019-12-25"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractWeeks(
			baseDate,
			(-2 as number),
		);

		expect(result).toBe(DDate.create("2019-12-18"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractWeeks(1),
		);

		expect(result).toBe(DDate.create("2019-12-25"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractWeeks(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(DDate.create("-0010-01-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
