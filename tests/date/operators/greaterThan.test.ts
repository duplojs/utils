import { pipe, type ExpectType, DDate } from "@scripts";

describe("greaterThan", () => {
	const threshold = DDate.create("2024-01-05");

	it("returns true when input is strictly greater than threshold", () => {
		const result = DDate.greaterThan(
			DDate.create("2024-01-06"),
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
		expect(DDate.greaterThan(threshold, threshold)).toBe(false);
	});

	it("returns false when input is less", () => {
		expect(DDate.greaterThan(DDate.create("2024-01-01"), threshold)).toBe(false);
	});

	it("une in pipe", () => {
		const result = pipe(
			DDate.create("2024-01-10"),
			DDate.greaterThan(threshold),
		);

		expect(result).toBe(true);
	});
});
