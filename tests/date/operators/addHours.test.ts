import { pipe, type ExpectType, DDate } from "@scripts";

describe("addHours", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-0h-0mn-0s-0ms");

	it("adds hours to a date", () => {
		const result = DDate.addHours(
			baseDate,
			6,
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-6h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addHours(
			baseDate,
			(-10 as number),
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-10h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addHours(1),
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-1h-0mn-0s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addHours(
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
