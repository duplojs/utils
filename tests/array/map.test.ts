import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("map", () => {
	it("map on simple array", () => {
		const arr = [1, 2, 3];
		const result = DArray.map(arr, (item) => item * 2);
		expect(result).toEqual([2, 4, 6]);
	});

	it("map with params", () => {
		const arr = ["a", "b", "c"];
		const result = DArray.map(arr, (item, { index }) => `${item}${index}`);
		expect(result).toEqual(["a0", "b1", "c2"]);
	});

	it("works with pipe (curried)", () => {
		const arr = [1, 2, 3];
		const result = pipe(arr, DArray.map((item) => item + 1));
		expect(result).toEqual([2, 3, 4]);
	});
});
