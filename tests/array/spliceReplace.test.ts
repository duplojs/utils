import { describe, it, expect } from "vitest";
import { spliceReplace } from "@scripts/array";
import { pipe } from "@scripts/common";

describe("spliceReplace", () => {
	it("replaces elements at specified index", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const result = spliceReplace(arr, 2, [7, 8]);
		expect(result).toEqual([1, 2, 7, 8, 5, 6]);
	});

	it("does not mutate original array", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		spliceReplace(arr, 2, [7, 8]);
		expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("works with pipe (curried)", () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const result = pipe(
			arr,
			spliceReplace(2, [7, 8]),
		);
		expect(result).toEqual([1, 2, 7, 8, 5, 6]);
	});
});
