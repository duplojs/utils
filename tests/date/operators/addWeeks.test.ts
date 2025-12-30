import { pipe, type ExpectType, DDate } from "@scripts";

describe("addWeeks", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01");

	it("adds weeks to a date", () => {
		const result = DDate.addWeeks(
			baseDate,
			1,
		);

		expect(result).toBe(DDate.create("2020-01-08"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.addWeeks(
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
			DDate.addWeeks(1),
		);

		expect(result).toBe(DDate.create("2020-01-08"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addWeeks(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(DDate.create("-0010-01-15"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
