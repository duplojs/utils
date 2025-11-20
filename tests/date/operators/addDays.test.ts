import { pipe, type ExpectType, DDate } from "@scripts";

describe("addDays", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-0h-0mn-0s-0ms");

	it("adds days to a date", () => {
		const result = DDate.addDays(
			baseDate,
			5,
		);

		expect(result).toBe(DDate.create("2020y-1m-6d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addDays(
			baseDate,
			(-3 as number),
		);

		expect(result).toBe(DDate.create("2020y-1m-4d-0h-0mn-0s-0ms"));

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

		expect(result).toBe(DDate.create("2020y-1m-2d-0h-0mn-0s-0ms"));

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

		expect(result).toBe(DDate.create("-10y-1m-6d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
