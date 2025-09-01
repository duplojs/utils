import { pipe } from "@scripts/common";
import { at } from "@scripts/array";

describe("at", () => {
	it("returns the element at the given index", () => {
		const arr = [1, 2, 3];

		expect(at(arr, 0)).toBe(1);
		expect(at(arr, 2)).toBe(3);
		expect(at(arr, -1)).toBe(3);
		expect(at(arr, 5)).toBeUndefined();
	});

	it("works with pipe (curried)", () => {
		const arr = [10, 20, 30];
		const result = pipe(
			arr,
			at(-1),
		);

		expect(result).toBe(30);
	});
});
