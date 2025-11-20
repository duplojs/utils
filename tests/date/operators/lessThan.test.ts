import { pipe, type ExpectType, DDate } from "@scripts";

describe("lessThan", () => {
	const threshold = DDate.create("2024y-1m-5d");

	it("returns true when input is strictly less than threshold", () => {
		const result = DDate.lessThan(
			DDate.create("2024y-1m-1d"),
			threshold,
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;
	});

	it("returns false when input equals threshold", () => {
		expect(DDate.lessThan(threshold, threshold)).toBe(false);
	});

	it("returns false when input is greater than threshold", () => {
		expect(DDate.lessThan(DDate.create("2024y-1m-10d"), threshold)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024y-1m-2d"),
			DDate.lessThan(threshold),
		);

		expect(result).toBe(true);
	});
});
