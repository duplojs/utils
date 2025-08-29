import { describe, it, expect } from "vitest";
import { arrayFlat } from "@scripts/array";
import { pipe } from "@scripts/common";

describe("arrayFlat", () => {
	it("flattens a 2D array", () => {
		const input = [[1, 2], [3, 4]];
		const result = arrayFlat(input);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("flattens a 3D array with depth 2", () => {
		const input = [[[1], [2]], [[3], [4]]];
		const result = arrayFlat(input, 2);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("flattens a 3D array with depth 1", () => {
		const input = [[[1], [2]], [[3], [4]]];
		const result = arrayFlat(input, 1);
		expect(result).toEqual([[1], [2], [3], [4]]);
	});

	it("flattens a 1D array (no effect)", () => {
		const input = [1, 2, 3];
		const result = arrayFlat(input, 1);
		expect(result).toEqual([1, 2, 3]);
	});

	it("works with empty arrays", () => {
		const input: number[][] = [];
		const result = arrayFlat(input, 1);
		expect(result).toEqual([]);
	});

	it("works with arrays containing empty arrays", () => {
		const input = [[], [1, 2], []];
		const result = arrayFlat(input, 1);
		expect(result).toEqual([1, 2]);
	});

	it("works with pipe (curried)", () => {
		const input = [[[1], [2]], [[3], [4]]];
		const result = pipe(
			input,
			arrayFlat(2),
		);
		expect(result).toEqual([1, 2, 3, 4]);
	});
});
