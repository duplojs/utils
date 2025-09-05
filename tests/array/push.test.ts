import { type ExpectType, pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("push", () => {
	it("adds elements in array", () => {
		const arr = [1, 2];
		const result = DArray.push(arr, 3, 4, 5);
		expect(result).toEqual([1, 2, 3, 4, 5]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("does not mutate the original array", () => {
		const arr = [1, 2];
		const result = DArray.push(arr, 3);
		expect(arr).toEqual([1, 2]);
		expect(result).not.toBe(arr);
	});

	it("add element in array", () => {
		const arr = ["duplojs", 1, 2];
		const result = DArray.push(arr, "php");
		expect(result).toEqual(["duplojs", 1, 2, "php"]);

		type check = ExpectType<
			typeof result,
			(string | number)[],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const arr = [1, 2];
		const result = pipe(
			arr,
			DArray.push(3),
		);
		expect(result).toEqual([1, 2, 3]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
