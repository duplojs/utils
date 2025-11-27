import { DArray, type ExpectType, pipe } from "@scripts";

describe("concat", () => {
	it("should concatenate", () => {
		const result = DArray.concat([1, 2], [3, 4]);
		expect(result).toEqual([1, 2, 3, 4]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3, 4],
			DArray.map((value) => value * 2),
			DArray.filter((value) => value > 4),
			DArray.concat([10, 12]),
		);
		expect(result).toEqual([6, 8, 10, 12]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
