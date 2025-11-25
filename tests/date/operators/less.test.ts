import { pipe, type ExpectType, DDate } from "@scripts";

describe("less", () => {
	const threshold = DDate.create("2024-01-05");

	it("returns true when input is less than threshold", () => {
		const result = DDate.less(
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

	it("returns true when input equals threshold", () => {
		expect(DDate.less(threshold, threshold)).toBe(true);
	});

	it("returns false when input is greater than threshold", () => {
		expect(DDate.less(DDate.create("2024-01-10"), threshold)).toBe(false);
	});

	it("une in pipe", () => {
		const result = pipe(
			DDate.create("2024-01-02"),
			DDate.less(threshold),
		);

		expect(result).toBe(true);
	});
});
