import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("maxOf", () => {
	it("returns undefined for empty array", () => {
		expect(DArray.maxOf([])).toBeUndefined();
	});

	it("returns the maximum number", () => {
		expect(DArray.maxOf([1, 4, 2])).toBe(4);
	});

	it("works through pipe", () => {
		const result = pipe(
			[3, 9, 1] as const,
			DArray.maxOf,
		);

		expect(result).toBe(9);
	});
});
