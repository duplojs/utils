import { DArray, type ExpectType } from "@scripts/index";

describe("concat", () => {
	it("should concatenate two arrays of numbers", () => {
		const result = DArray.concat([1, 2], [3, 4]);
		expect(result).toEqual([1, 2, 3, 4]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("should concatenate multiple arrays of strings", () => {
		const result = DArray.concat(["a"], ["b", "c"], ["d"]);
		expect(result).toEqual(["a", "b", "c", "d"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("should concatenate arrays and individual values", () => {
		const result = DArray.concat(10, 20, [30, 40], 50);
		expect(result).toEqual([10, 20, 30, 40, 50]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
