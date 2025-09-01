import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("findIndex", () => {
	const arr = [1, 2, 3, 4, 5];

	it("should find the index of the first element matching the predicate (normal usage)", () => {
		const index = DArray.findIndex(arr, (element) => element > 3);
		expect(index).toBe(3);
	});

	it("should return undefined if no element matches the predicate (normal usage)", () => {
		const index = DArray.findIndex(arr, (element) => element === 10);
		expect(index).toBeUndefined();
	});

	it("should pass index param to predicate", () => {
		const index = DArray.findIndex(arr, (element, { index }) => index === 4 && element === 5);
		expect(index).toBe(4);
	});

	it("works with pipe (curried)", () => {
		const index = pipe(
			arr,
			DArray.findIndex((element) => element > 2),
		);
		expect(index).toBe(2);
	});
});
