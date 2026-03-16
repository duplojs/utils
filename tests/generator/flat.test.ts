import { DArray, DGenerator, pipe, type ExpectType } from "@scripts";

describe("flat", () => {
	it("flattens one level by default", () => {
		const result = DGenerator.flat([[1, 2], [3, 4]]);

		expect(DArray.from(result)).toStrictEqual([1, 2, 3, 4]);

		type check = ExpectType<
			typeof result,
			Generator<number, void, unknown>,
			"strict"
		>;
	});

	it("flattens nested iterables up to the provided depth", () => {
		const result = DGenerator.flat([[[1], [2]], [[3], [4]]], 2);

		expect(DArray.from(result)).toStrictEqual([1, 2, 3, 4]);

		type check = ExpectType<
			typeof result,
			Generator<number, void, unknown>,
			"strict"
		>;
	});

	it("keeps nested iterables when the requested depth is reached", () => {
		const result = DGenerator.flat([[[1], [2]], [[3], [4]]], 1);

		expect(DArray.from(result)).toStrictEqual([[1], [2], [3], [4]]);

		type check = ExpectType<
			typeof result,
			Generator<number[], void, unknown>,
			"strict"
		>;
	});

	it("does not flatten non iterable values", () => {
		const result = DGenerator.flat([[1], 2, false, null, undefined]);

		expect(DArray.from(result)).toStrictEqual([1, 2, false, null, undefined]);

		type check = ExpectType<
			typeof result,
			Generator<number | boolean | null | undefined, void, unknown>,
			"strict"
		>;
	});
});
