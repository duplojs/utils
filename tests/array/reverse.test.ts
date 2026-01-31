import { DArray, type ExpectType, pipe } from "@scripts";

describe("reverse", () => {
	it("reverse simple array", () => {
		const result = DArray.reverse([1, 2, 3]);

		expect(result).toEqual([3, 2, 1]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("reverse void array", () => {
		expect(DArray.reverse([])).toEqual([]);
	});

	it("works with pipe (curried)", () => {
		const result = pipe(
			[1, 2, 3] as const,
			DArray.reverse,
		);

		expect(result).toEqual([3, 2, 1]);

		type check = ExpectType<
			typeof result,
			[3, 2, 1],
			"strict"
		>;
	});
});
