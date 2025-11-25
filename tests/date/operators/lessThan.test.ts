import { pipe, type ExpectType, DDate } from "@scripts";

describe("lessThan", () => {
	const threshold = DDate.create("2024-01-05");

	it("returns true when input is strictly less than threshold", () => {
		const result = DDate.lessThan(
			DDate.create("2024-01-01"),
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
		expect(DDate.lessThan(DDate.create("2024-01-10"), threshold)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024-01-02"),
			DDate.lessThan(threshold),
		);

		expect(result).toBe(true);
	});
});
