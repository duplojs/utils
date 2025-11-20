import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractWeeks", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-15d-0h-0mn-0s-0ms");

	it("subtracts weeks from a date", () => {
		const result = DDate.subtractWeeks(
			baseDate,
			1,
		);

		expect(result).toBe(DDate.create("2019y-12m-25d-0h-0mn-0s-0ms"));

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

		expect(result).toBe(DDate.create("2019y-12m-18d-0h-0mn-0s-0ms"));

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

		expect(result).toBe(DDate.create("2019y-12m-25d-0h-0mn-0s-0ms"));

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

		expect(result).toBe(DDate.create("-10y-1m-1d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
