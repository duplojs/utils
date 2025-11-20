import { pipe, type ExpectType, DDate } from "@scripts";

describe("greater", () => {
	const threshold = DDate.create("2024y-1m-5d");

	it("returns true when input is greater than threshold", () => {
		const result = DDate.greater(
			DDate.create("2024y-1m-6d"),
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
		expect(DDate.greater(DDate.create("2024y-1m-1d"), threshold)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024y-1m-10d"),
			DDate.greater(threshold),
		);

		expect(result).toBe(true);
	});
});
