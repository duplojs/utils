import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("spliceDelete", () => {
	it("deletes elements at specified index", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const result = DArray.spliceDelete(arr, 2, 2);
		expect(result).toEqual([1, 2, 5, 6]);
	});

	it("does not mutate original array", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		DArray.spliceDelete(arr, 2, 2);
		expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("works with pipe (curried)", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const result = pipe(
			arr,
			DArray.spliceDelete(2, 2),
		);
		expect(result).toEqual([1, 2, 5, 6]);
	});
});
