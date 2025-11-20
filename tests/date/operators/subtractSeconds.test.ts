import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractSeconds", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-0h-1mn-0s-0ms");

	it("subtracts seconds from a date", () => {
		const result = DDate.subtractSeconds(
			baseDate,
			75,
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-58mn-45s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractSeconds(
			baseDate,
			(-30 as number),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-59mn-30s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractSeconds(10),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-59mn-50s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractSeconds(
			beforeEpochDate,
			30,
		);

		expect(result).toBe(DDate.create("-10y-1m-1d-0h-0mn-30s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
