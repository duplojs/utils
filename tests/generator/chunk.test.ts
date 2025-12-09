import { DArray, DGenerator, pipe, type ExpectType } from "@scripts";

describe("chunk generator", () => {
	const input = [1, 2, 3, 4, 5];

	it("split iterable into equal chunks", () => {
		const result = DGenerator.chunk(input, 2);

		expect(DArray.from(result)).toStrictEqual([[1, 2], [3, 4], [5]]);

		type check = ExpectType<
			typeof result,
			Generator<number[], unknown, unknown>,
			"strict"
		>;
	});

	it("works with pipe (curried)", () => {
		const result = pipe(
			input,
			DGenerator.chunk(3),
		);

		expect(DArray.from(result)).toStrictEqual([[1, 2, 3], [4, 5]]);

		type check = ExpectType<
			typeof result,
			Generator<number[], unknown, unknown>,
			"strict"
		>;
	});

	it("handles iterables that are not arrays", () => {
		const set = new Set(["a", "b", "c", "d"]);

		const result = DGenerator.chunk(set, 2);

		expect(DArray.from(result)).toStrictEqual([["a", "b"], ["c", "d"]]);

		type check = ExpectType<
			typeof result,
			Generator<string[], unknown, unknown>,
			"strict"
		>;
	});
});
