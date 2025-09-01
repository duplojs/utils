import { pipe } from "@scripts/common";
import { isArray } from "@scripts/array";

describe("isArray", () => {
	it("should work in normal mode", () => {
		expect(isArray([1, 2, 3])).toBe(true);
		expect(isArray("string")).toBe(false);
	});

	it("should work in curried mode with pipe", () => {
		const result = pipe(
			[1, 2, 3],
			isArray(),
		);

		expect(result).toBe(true);
	});
});
