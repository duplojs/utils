import { pipe, type ExpectType, DDate } from "@scripts";

describe("addYears", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-6m-1d-0h-0mn-0s-0ms");

	it("adds years to a date", () => {
		const result = DDate.addYears(
			baseDate,
			3,
		);

		expect(result).toBe(DDate.create("2023y-1m-1d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addYears(
			baseDate,
			(-2 as number),
		);

		expect(result).toBe(DDate.create("2022y-1m-1d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addYears(1),
		);

		expect(result).toBe(DDate.create("2021y-1m-1d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addYears(
			beforeEpochDate,
			2,
		);

		expect(result).toBe(DDate.create("-8y-6m-1d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
