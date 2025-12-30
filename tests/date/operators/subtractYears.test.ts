import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractYears", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-06-01");

	it("subtracts years from a date", () => {
		const result = DDate.subtractYears(
			baseDate,
			2,
		);

		expect(result).toBe(DDate.create("2018-01-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.subtractYears(
			baseDate,
			(-3 as number),
		);

		expect(result).toBe(DDate.create("2023-01-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractYears(1),
		);

		expect(result).toBe(DDate.create("2019-01-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractYears(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(DDate.create("-0012-06-01"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
