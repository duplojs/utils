import { pipe, type ExpectType, DDate } from "@scripts";

describe("greater", () => {
	const threshold = DDate.create("2024-01-05");

	it("returns true when input is greater than threshold", () => {
		const result = DDate.greater(
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

	it("returns true when input equals threshold", () => {
		expect(DDate.greater(threshold, threshold)).toBe(true);
	});

	it("returns false when input is less than threshold", () => {
		expect(DDate.greater(DDate.create("2024-01-01"), threshold)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024-01-10"),
			DDate.greater(threshold),
		);

		expect(result).toBe(true);
	});
});
