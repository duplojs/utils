import { DArray, pipe, type ExpectType } from "@scripts";

describe("chunk", () => {
	it("split array into equal sized chunks", () => {
		const result = DArray.chunk([1, 2, 3, 4], 2);

		expect(result).toEqual([[1, 2], [3, 4]]);

		type check = ExpectType<
			typeof result,
			number[][],
			"strict"
		>;
	});

	it("keeps remainder as a smaller chunk", () => {
		const result = DArray.chunk([1, 2, 3, 4, 5], 2);

		expect(result).toEqual([[1, 2], [3, 4], [5]]);

		type check = ExpectType<
			typeof result,
			number[][],
			"strict"
		>;
	});

	it("works with pipe (curried)", () => {
		const result = pipe(
			[1, 2, 3, 4, 5],
			DArray.chunk(3),
		);

		expect(result).toEqual([[1, 2, 3], [4, 5]]);

		type check = ExpectType<
			typeof result,
			number[][],
			"strict"
		>;
	});

	it("does not mutate the source array", () => {
		const input = [1, 2, 3, 4];
		const snapshot = [...input];

		const result = DArray.chunk(input, 5);

		expect(input).toEqual(snapshot);
		expect(result).toEqual([[1, 2, 3, 4]]);
	});
});
