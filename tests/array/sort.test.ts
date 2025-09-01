import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("sort", () => {
	it("sorts array with compare function", () => {
		const arr = [3, 1, 4, 2];
		const result = DArray.sort(arr, (first, second) => first - second);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("does not mutate original array", () => {
		const arr = [3, 1, 4, 2];
		DArray.sort(arr, (first, second) => first - second);
		expect(arr).toEqual([3, 1, 4, 2]);
	});

	it("works with pipe (curried)", () => {
		const arr = [3, 1, 4, 2];
		const result = pipe(
			arr,
			DArray.sort((first, second) => first - second),
		);
		expect(result).toEqual([1, 2, 3, 4]);
	});
});
