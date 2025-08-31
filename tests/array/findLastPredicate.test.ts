import { describe, it, expect } from "vitest";
import { arrayFindLastPredicate } from "@scripts/array";
import { pipe } from "@scripts/common";

describe("arrayFindLastPredicate", () => {
	it("returns the last matching element", () => {
		const arr = [1, 2, 3, 2, 1];
		const result = arrayFindLastPredicate(arr, (item) => item === 2);
		expect(result).toBe(2);
	});

	it("returns undefined if no element matches", () => {
		const arr = [1, 2, 3];
		const result = arrayFindLastPredicate(arr, (item) => item === 42);
		expect(result).toBeUndefined();
	});

	it("works with pipe (curried)", () => {
		const arr = [5, 10, 15, 10];
		const result = pipe(
			arr,
			arrayFindLastPredicate((item) => item === 10),
		);
		expect(result).toBe(10);
	});
});
