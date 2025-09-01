import { pipe } from "@scripts/common";
import { DArray } from "@scripts/index";

describe("flat", () => {
	it("flattens a 2D array by default (depth 1)", () => {
		const arr = [[1], [2], [3]];
		expect(DArray.flat(arr)).toEqual([1, 2, 3]);
	});

	it("flattens a 3D array with depth 2", () => {
		const arr = [[[1]], [[2]], [[3]]];
		expect(DArray.flat(arr, 2)).toEqual([1, 2, 3]);
	});

	it("handles empty arrays", () => {
		expect(DArray.flat([])).toEqual([]);
	});

	it("works with arrays containing non-array elements", () => {
		const arr = [1, [2, 3], 4];
		expect(DArray.flat(arr)).toEqual([1, 2, 3, 4]);
	});

	it("should work in curried mode with pipe", () => {
		const arr = [[[1]], [[2]], [[3]]];
		const result = pipe(
			arr,
			DArray.flat(2),
		);
		expect(result).toEqual([1, 2, 3]);
	});

	it("should work in curried mode with flat() (no arg)", () => {
		const arr = [[1], [2], [3]];
		const result = pipe(
			arr,
			DArray.flat(),
		);
		expect(result).toEqual([1, 2, 3]);
	});

	it("should work in curried mode with flat() with depth", () => {
		const arr = [[[[1]], [[2]]], [[[3]], [[4]]]];
		const result = pipe(
			arr,
			DArray.flat(2),
		);
		expect(result).toEqual([[1], [2], [3], [4]]);
	});
});
