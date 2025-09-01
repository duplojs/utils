import { pipe } from "@scripts/common";
import { push } from "@scripts/array";

describe("push", () => {
	it("adds elements in array", () => {
		const arr = [1, 2];
		const result = push(arr, 3, 4, 5);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("does not mutate the original array", () => {
		const arr = [1, 2];
		const result = push(arr, 3);
		expect(arr).toEqual([1, 2]);
		expect(result).not.toBe(arr);
	});

	it("works with pipe (curried)", () => {
		const arr = [1, 2];
		const result = pipe(
			arr,
			push(3),
		);
		expect(result).toEqual([1, 2, 3]);
	});
});
