import { DArray, pipe, type ExpectType } from "@scripts";

describe("unshift", () => {
	it("adds elements in array", () => {
		const arr = ["express", "nestjs", "trpc"];
		const result = DArray.unshift(arr, "duplojs", "is", "better", "of");
		expect(result).toEqual(["duplojs", "is", "better", "of", "express", "nestjs", "trpc"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("add element in array", () => {
		const arr = [1, 2, "php"];
		const result = DArray.unshift(arr, 3);
		expect(result).toEqual([3, 1, 2, "php"]);

		type check = ExpectType<
			typeof result,
			(string | number)[],
			"strict"
		>;
	});

	it("does not mutate the original array", () => {
		const arr = [1, 2];
		const result = DArray.unshift(arr, 3);
		expect(arr).toEqual([1, 2]);
		expect(result).not.toBe(arr);
	});

	it("use in pipe", () => {
		const arr = [1, 2];
		const result = pipe(
			arr,
			DArray.unshift(3),
		);
		expect(result).toEqual([3, 1, 2]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
