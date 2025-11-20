import { pipe, type ExpectType, DDate } from "@scripts";

describe("addMinutes", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-0h-0mn-0s-0ms");

	it("adds minutes to a date", () => {
		const result = DDate.addMinutes(
			baseDate,
			90,
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-1h-30mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addMinutes(
			baseDate,
			(-45 as number),
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-0h-45mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addMinutes(15),
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-0h-15mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addMinutes(
			beforeEpochDate,
			45,
		);

		expect(result).toBe(DDate.create("-10y-1m-1d-0h-45mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
