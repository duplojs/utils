import { DArray, type ExpectType } from "@scripts";

describe("shift", () => {
	it("must have index 1 less", () => {
		const arr = [1, 2, 3];
		const result = DArray.shift(arr);

		expect(result).toEqual([2, 3]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("must have index 1 less (literal)", () => {
		const arr = [1, 2, 3] as const;
		const result = DArray.shift(arr);

		expect(result).toStrictEqual([2, 3]);

		type check = ExpectType<
			typeof result,
			[2, 3],
			"strict"
		>;
	});

	it("must have index 1 less (multiple type)", () => {
		const arr = ["duplojs", 2, { id: 1 }];
		const result = DArray.shift(arr);

		expect(result).toEqual([2, { id: 1 }]);

		type check = ExpectType<
			typeof result,
			(string | number | { id: number })[],
			"strict"
		>;
	});

	it("must have index 1 less (literal v2)", () => {
		const arr = ["duplojs", 2, { id: 1 }] as const;
		const result = DArray.shift(arr);

		expect(result).toStrictEqual([2, { id: 1 }]);

		type check = ExpectType<
			typeof result,
			[2, { readonly id: 1 }],
			"strict"
		>;
	});

	it("infers tuple result from a max elements constrained tuple", () => {
		const arr = DArray.withMaxElements([1, 2, 3] as const, 5);

		const result = DArray.shift(arr);

		expect(result).toStrictEqual([2, 3]);

		type check = ExpectType<
			typeof result,
			[2, 3] & DArray.MaxElements<5>,
			"strict"
		>;
	});

	it("infers array result from an array and open tuple intersection", () => {
		const arr = ["a", "b"] as string[] & ["a", ...string[]];
		const result = DArray.shift(arr);

		expect(result).toStrictEqual(["b"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});
});
