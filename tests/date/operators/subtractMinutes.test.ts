import { pipe, type ExpectType, DDate } from "@scripts";

describe("subtractMinutes", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-1h-0mn-0s-0ms");

	it("subtracts minutes from a date", () => {
		const result = DDate.subtractMinutes(
			baseDate,
			90,
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-22h-30mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.subtractMinutes(
			baseDate,
			(-45 as number),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-15mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.subtractMinutes(15),
		);

		expect(result).toBe(DDate.create("2019y-12m-31d-23h-45mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.subtractMinutes(
			beforeEpochDate,
			30,
		);

		expect(result).toBe(DDate.create("-10y-1m-1d-0h-30mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
