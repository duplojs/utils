import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("some", () => {
	it("returns true if at least one element matches", () => {
		const arr = [1, 2, 3, 4];
		const result = DArray.some(arr, (value) => value === 2);
		expect(result).toBe(true);
	});

	it("returns false if no element matches", () => {
		const arr = [1, 2, 3, 4];
		const result = DArray.some(arr, (value) => value === 5);
		expect(result).toBe(false);
	});

	it("returns false for empty array", () => {
		const arr: number[] = [];
		const result = DArray.some(arr, (value) => value === 1);
		expect(result).toBe(false);
	});

	it("works with pipe (curried)", () => {
		const arr = [10, 20, 30];
		const result = pipe(
			arr,
			DArray.some((item, { index }) => {
				if (item === 20 && index === 1) {
					return true;
				}
				return false;
			}),
		);

		expect(result).toBe(true);
	});
});
