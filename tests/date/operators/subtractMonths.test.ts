import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractMonths", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-6m-1d-0h-0mn-0s-0ms");

	it("subtracts months from a date", () => {
		const result = DDate.subtractMonths(
			baseDate,
			2,
		);

		expect(result).toBe(DDate.create("2019y-11m-1d-0h-0mn-0s-0ms"));

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

		expect(result).toBe(DDate.create("2019y-9m-1d-0h-0mn-0s-0ms"));

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

		expect(result).toBe(DDate.create("2019y-12m-1d-0h-0mn-0s-0ms"));

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

		expect(result).toBe(DDate.create("-10y-4m-1d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
