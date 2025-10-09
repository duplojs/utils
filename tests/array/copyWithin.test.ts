import { DArray, type ExpectType, pipe } from "@scripts/index";

describe("copyWithin", () => {
	it("should copy elements within the array", () => {
		const result = DArray.copyWithin([1, 2, 3, 4, 5], 0, 3);
		expect(result).toEqual([4, 5, 3, 4, 5]);
	});

	it("should copy elements with end parameter", () => {
		const result = DArray.copyWithin([10, 20, 30, 40, 50], 1, 2, 4);
		expect(result).toEqual([10, 30, 40, 40, 50]);
	});

	it("should return a new array and not mutate the original", () => {
		const arr = [1, 2, 3, 4];
		const result = DArray.copyWithin(arr, 1, 2);
		expect(result).toEqual([1, 3, 4, 4]);
		expect(arr).toEqual([1, 2, 3, 4]);
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3, 4, 5],
			DArray.copyWithin(2, 0, 2),
			DArray.reverse,
			DArray.map((value) => value * 2),
		);
		expect(result).toEqual([10, 4, 2, 4, 2]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
