import { pipe, type ExpectType, DDate } from "@scripts";

describe("addMilliseconds", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-0h-0mn-0s-0ms");

	it("adds milliseconds to a date", () => {
		const result = DDate.addMilliseconds(
			baseDate,
			250,
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-0h-0mn-0s-250ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addMilliseconds(
			baseDate,
			(-400 as number),
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-0h-0mn-0s-400ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addMilliseconds(100),
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-0h-0mn-0s-100ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addMilliseconds(
			beforeEpochDate,
			400,
		);

		expect(result).toBe(DDate.create("-10y-1m-1d-0h-0mn-0s-400ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
