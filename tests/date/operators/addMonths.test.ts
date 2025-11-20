import { pipe, type ExpectType, DDate } from "@scripts";

describe("addMonths", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-6m-1d-0h-0mn-0s-0ms");

	it("adds months to a date", () => {
		const result = DDate.addMonths(
			baseDate,
			2,
		);

		expect(result).toBe(DDate.create("2020y-3m-1d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addMonths(
			baseDate,
			(-5 as number),
		);

		expect(result).toBe(DDate.create("2020y-6m-1d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addMonths(1),
		);

		expect(result).toBe(DDate.create("2020y-2m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addMonths(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(DDate.create("-10y-8m-1d"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
