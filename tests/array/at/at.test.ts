import { pipe } from "@scripts/common";
import { DArray } from "@scripts";
import { type ExpectType } from "dist";

describe("at", () => {
	it("returns the element DArray.at the given index", () => {
		const arr = [1, 2, 3];

		expect(DArray.at(arr, 0)).toBe(1);
		expect(DArray.at(arr, 2)).toBe(3);
		expect(DArray.at(arr, -1)).toBe(3);
		expect(DArray.at(arr, 5)).toBeUndefined();
	});

	it("works with pipe (curried)", () => {
		const arr = [10, 20, 30];
		const result = pipe(
			arr,
			DArray.at(-1),
		);

		type check = ExpectType<
			typeof result,
			number | undefined,
			"strict"
		>;

		expect(result).toBe(30);
	});

	it("works with tuple and negative index", () => {
		const result = DArray.at(<const>[10, 20, 30], -1);

		type check = ExpectType<
			typeof result,
			10 | 20 | 30,
			"strict"
		>;

		expect(result).toBe(30);
	});

	it("works with tuple and positive index", () => {
		const result = DArray.at(<const>[10, 20, 30], 1);

		type check = ExpectType<
			typeof result,
			20,
			"strict"
		>;

		expect(result).toBe(20);
	});
});
