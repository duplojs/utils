import { pipe, type ExpectType, DDate } from "@scripts";

describe("addSeconds", () => {
	const baseDate = DDate.create("2020y-1m-1d-0h-0mn-0s-0ms");
	const beforeEpochDate = DDate.create("-10y-1m-1d-0h-0mn-0s-0ms");

	it("adds seconds to a date", () => {
		const result = DDate.addSeconds(
			baseDate,
			75,
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-0h-1mn-15s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("treats negative numbers as their absolute value", () => {
		const result = DDate.addSeconds(
			baseDate,
			(-30 as number),
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-0h-0mn-30s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			baseDate,
			DDate.addSeconds(10),
		);

		expect(result).toBe(DDate.create("2020y-1m-1d-0h-0mn-10s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("handles dates before 1970", () => {
		const result = DDate.addSeconds(
			beforeEpochDate,
			45,
		);

		expect(result).toBe(DDate.create("-10y-1m-1d-0h-0mn-45s-0ms"));

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
