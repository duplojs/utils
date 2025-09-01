import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("findLast", () => {
	it("returns the last matching element", () => {
		const arr = [1, 2, 3, 2, 1];
		const result = DArray.findLast(arr, (item) => item === 2);
		expect(result).toBe(2);
	});

	it("returns undefined if no element matches", () => {
		const arr = [1, 2, 3];
		const result = DArray.findLast(arr, (item) => item === 42);
		expect(result).toBeUndefined();
	});

	it("returns undefined for empty array", () => {
		const arr: number[] = [];
		const result = DArray.findLast(arr, (item) => item === 1);
		expect(result).toBeUndefined();
	});

	it("returns the last even number", () => {
		const arr = [1, 3, 5, 8, 7, 4, 9];
		const result = DArray.findLast(arr, (item) => item % 2 === 0);
		expect(result).toBe(4);
	});

	it("works with pipe (curried)", () => {
		const arr = [5, 10, 15, 10];
		const result = pipe(
			arr,
			DArray.findLast((item) => item === 10),
		);
		expect(result).toBe(10);
	});
});
