import { describe, it, expect } from "vitest";
import { arrayPush } from "@scripts/array";
import { pipe } from "@scripts/common";

describe("arrayPush", () => {
	it("adds elements in array", () => {
		const arr = [1, 2];
		const result = arrayPush(arr, 3, 4, 5);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("does not mutate the original array", () => {
		const arr = [1, 2];
		const result = arrayPush(arr, 3);
		expect(arr).toEqual([1, 2]);
		expect(result).not.toBe(arr);
	});

	it("works with pipe (curried)", () => {
		const arr = [1, 2];
		const result = pipe(
			arr,
			arrayPush(3, 4),
			arrayPush(5),
		);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});
});
