import { DArray, pipe } from "@scripts/index";

describe("slice", () => {
	it("should slice an array from start to end", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = DArray.slice(arr, 1, 4);
		expect(result).toEqual([2, 3, 4]);
	});

	it("should slice from start to the end of the array if end is undefined", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = DArray.slice(arr, 2);
		expect(result).toEqual([3, 4, 5]);
	});

	it("should return the whole array if start and end are undefined", () => {
		const arr = [1, 2, 3];
		const result = DArray.slice(arr);
		expect(result).toEqual([1, 2, 3]);
	});

	it("use in pipe", () => {
		const arr = [10, 20, 30, 40, 50];
		const result = pipe(
			arr,
			DArray.slice(1, 4),
			DArray.reverse,
		);
		expect(result).toEqual([40, 30, 20]);
	});
});
