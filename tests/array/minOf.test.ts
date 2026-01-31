import { DArray, pipe } from "@scripts";

describe("minOf", () => {
	it("returns undefined for empty array", () => {
		expect(DArray.minOf([])).toBeUndefined();
	});

	it("returns the minimum number", () => {
		expect(DArray.minOf([1, 4, -2])).toBe(-2);
	});

	it("works through pipe", () => {
		const result = pipe(
			[3, 9, 1] as const,
			DArray.minOf,
		);

		expect(result).toBe(1);
	});
});
