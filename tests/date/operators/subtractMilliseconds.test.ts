import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractMilliseconds", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-0h-0mn-1s-0ms");

	it("subtracts milliseconds from a date", () => {
		const result = DDate.subtractMilliseconds(
			baseDate,
			250,
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-59mn-59s-750ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractMilliseconds(
			baseDate,
			(-400 as number),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-59mn-59s-600ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractMilliseconds(100),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-59mn-59s-900ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractMilliseconds(
			beforeEpochDate,
			250,
		);

		expect(result).toBe(DDate.create("-10y-1m-1d-0h-0mn-0s-750ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
