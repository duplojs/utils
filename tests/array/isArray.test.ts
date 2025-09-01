import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("isArray", () => {
	it("should work in normal mode", () => {
		expect(DArray.isArray([1, 2, 3])).toBe(true);
		expect(DArray.isArray("string")).toBe(false);
	});

	it("should work in curried mode with pipe", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.isArray(),
		);

		expect(result).toBe(true);
	});
});
