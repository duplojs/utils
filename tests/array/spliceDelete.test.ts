import { pipe } from "@scripts/common";
import { spliceDelete } from "@scripts/array";

describe("spliceDelete", () => {
	it("deletes elements at specified index", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const result = spliceDelete(arr, 2, 2);
		expect(result).toEqual([1, 2, 5, 6]);
	});

	it("does not mutate original array", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		spliceDelete(arr, 2, 2);
		expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("works with pipe (curried)", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const result = pipe(
			arr,
			spliceDelete(2, 2),
		);
		expect(result).toEqual([1, 2, 5, 6]);
	});
});
