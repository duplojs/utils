import { pipe, type ExpectType, DDate } from "@scripts";

describe("addDays", () => {
	const baseDate = DDate.create("2020-01-01");
	const beforeEpochDate = DDate.create("-0010-01-01");

	it("adds days to a date", () => {
		const result = DDate.addDays(
			baseDate,
			5,
		);

		expect(result).toBe(DDate.create("2020-01-06"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports negative numbers", () => {
		const result = DDate.addDays(
			baseDate,
			(-3 as number),
		);

		expect(result).toBe(DDate.create("2019-12-29"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addDays(1),
		);

		expect(result).toBe(DDate.create("2020-01-02"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addDays(
			beforeEpochDate,
			5,
		);

		expect(result).toBe(DDate.create("-0010-01-06"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
