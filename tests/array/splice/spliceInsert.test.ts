import { DArray, pipe } from "@scripts";

describe("spliceInsert", () => {
	it("inserts elements at specified index", () => {
		const arr = [1, 2, 5, 6];
		const result = DArray.spliceInsert(arr, 2, [3, 4]);
		expect(result).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("does not mutate original array", () => {
		const arr = [1, 2, 5, 6];
		DArray.spliceInsert(arr, 2, [3, 4]);
		expect(arr).toEqual([1, 2, 5, 6]);
	});

	it("works with pipe (curried)", () => {
		const arr = [1, 2, 5, 6];
		const result = pipe(
			arr,
			DArray.spliceInsert(2, [3, 4]),
		);
		expect(result).toEqual([1, 2, 3, 4, 5, 6]);
	});
});
