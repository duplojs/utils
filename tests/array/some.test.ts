import { describe, it, expect } from "vitest";
import { some } from "@scripts/array";
import { pipe } from "@scripts/common";

describe("arraySome", () => {
	it("returns true if at least one element matches", () => {
		const arr = [1, 2, 3, 4];
		const result = some(arr, (value) => value === 2);
		expect(result).toBe(true);
	});

	it("returns false if no element matches", () => {
		const arr = [1, 2, 3, 4];
		const result = some(arr, (value) => value === 5);
		expect(result).toBe(false);
	});

	it("returns false for empty array", () => {
		const arr: number[] = [];
		const result = some(arr, (value) => value === 1);
		expect(result).toBe(false);
	});

	it("works with pipe (curried)", () => {
		const arr = [10, 20, 30];
		const result = pipe(
			arr,
			some((item, index, array) => {
				if (item === 20 && index === 1 && array === arr) {
					return true;
				}
				return false;
			}),
		);

		expect(result).toBe(true);
	});
});
