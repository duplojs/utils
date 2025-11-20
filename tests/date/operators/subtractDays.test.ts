import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractDays", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-10d-0h-0mn-0s-0ms");

	it("subtracts days from a date", () => {
		const result = DDate.subtractDays(
			baseDate,
			4,
		);

		expect(result).toBe(DDate.create("2019y-12m-28d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractDays(
			baseDate,
			(-3 as number),
		);

		expect(result).toBe(DDate.create("2019y-12m-29d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractDays(1),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractDays(
			beforeEpochDate,
			5,
		);

		expect(result).toBe(DDate.create("-10y-1m-5d-0h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
