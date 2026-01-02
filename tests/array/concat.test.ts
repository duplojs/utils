import { DArray, type ExpectType, pipe } from "@scripts";

describe("concat", () => {
	it("should concatenate", () => {
		const result = DArray.concat([1, 2], ["test", "ttt"], [12n], [true], [null]);
		expect(result).toEqual([1, 2, "test", "ttt", 12n, true, null]);

		type check = ExpectType<
			typeof result,
			(string | number | bigint | boolean | null)[],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3, 4],
			DArray.map((value) => value * 2),
			DArray.filter((value) => value > 4),
			DArray.concat(["test", "ttt"]),
		);
		expect(result).toEqual([6, 8, "test", "ttt"]);

		type check = ExpectType<
			typeof result,
			(string | number)[],
			"strict"
		>;
	});
});
