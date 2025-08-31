import { describe, it, expect } from "vitest";
import { sort } from "@scripts/array";
import { pipe } from "@scripts/common";

describe("sort", () => {
	it("sorts array with compare function", () => {
		const arr = [3, 1, 4, 2];
		const result = sort(arr, (first, second) => first - second);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("does not mutate original array", () => {
		const arr = [3, 1, 4, 2];
		sort(arr, (first, second) => first - second);
		expect(arr).toEqual([3, 1, 4, 2]);
	});

	it("works with pipe (curried)", () => {
		const arr = [3, 1, 4, 2];
		const result = pipe(
			arr,
			sort((first, second) => first - second),
		);
		expect(result).toEqual([1, 2, 3, 4]);
	});
});
