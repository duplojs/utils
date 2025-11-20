import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractHours", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-12h-0mn-0s-0ms");

	it("subtracts hours from a date", () => {
		const result = DDate.subtractHours(
			baseDate,
			6,
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-18h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractHours(
			baseDate,
			(-10 as number),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-14h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractHours(1),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractHours(
			beforeEpochDate,
			6,
		);

		expect(result).toBe(DDate.create("-10y-1m-1d-6h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
