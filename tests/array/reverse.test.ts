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

	it("infers tuple result from a max elements constrained tuple", () => {
		const input = DArray.withMaxElements([1, 2, 3] as const, 5);

		const result = DArray.reverse(input);

		expect(result).toEqual([3, 2, 1]);

		type check = ExpectType<
			typeof result,
			[3, 2, 1] & DArray.MaxElements<5>,
			"strict"
		>;
	});

	it("infers array result from an array and open tuple intersection", () => {
		const input = ["a", "b"] as string[] & ["a", ...string[]];
		const result = DArray.reverse(input);

		expect(result).toStrictEqual(["b", "a"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});
});
