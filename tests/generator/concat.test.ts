import { DArray, DGenerator, pipe, type ExpectType } from "@scripts";

describe("concat", () => {
	it("concatenates iterables from left to right", () => {
		const result = DGenerator.concat([1, 2], [3], [4, 5]);

		expect(DArray.from(result)).toStrictEqual([1, 2, 3, 4, 5]);

		type check = ExpectType<
			typeof result,
			Generator<1 | 2 | 3 | 4 | 5, unknown, unknown>,
			"strict"
		>;
	});

	it("supports curried style", () => {
		const tail: Iterable<string> = ["c", "d"];
		const result = DGenerator.concat(tail)(["a", "b"]);

		expect(DArray.from(result)).toStrictEqual(["a", "b", "c", "d"]);

		type check = ExpectType<
			typeof result,
			Generator<string, unknown, unknown>,
			"strict"
		>;
	});

	it("works in pipe with curried style", () => {
		const tail: Iterable<number> = [5, 6];
		const result = pipe(
			[1, 2, 3, 4],
			DGenerator.filter((value) => value > 2),
			DGenerator.concat(tail),
		);

		expect(DArray.from(result)).toStrictEqual([3, 4, 5, 6]);

		type check = ExpectType<
			typeof result,
			Generator<number, unknown, unknown>,
			"strict"
		>;
	});
});
