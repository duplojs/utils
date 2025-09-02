import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("reverse", () => {
	it("reverse simple array", () => {
		expect(DArray.reverse([1, 2, 3])).toEqual([3, 2, 1]);
	});

	it("reverse void array", () => {
		expect(DArray.reverse([])).toEqual([]);
	});

	it("works with pipe (curried)", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.reverse(),
		);

		expect(result).toEqual([3, 2, 1]);
	});
});
