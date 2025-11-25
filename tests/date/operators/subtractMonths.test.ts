import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractMonths", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-06-01");

	it("subtracts months from a date", () => {
		const result = DDate.subtractMonths(
			baseDate,
			2,
		);

		expect(result).toBe(DDate.create("2019-11-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractMonths(
			baseDate,
			(-4 as number),
		);

		expect(result).toBe(DDate.create("2019-09-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractMonths(1),
		);

		expect(result).toBe(DDate.create("2019-12-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractMonths(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(DDate.create("-0010-04-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
