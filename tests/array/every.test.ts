import { DArray, pipe } from "@scripts/index";

describe("every", () => {
	it("returns true when all elements satisfy the predicate", () => {
		const arr = [2, 4, 6, 8];
		const result = DArray.every(arr, (element) => element % 2 === 0);
		expect(result).toBe(true);
	});

	it("returns false when not all elements satisfy the predicate", () => {
		const arr = [2, 4, 6, 8];
		const result = DArray.every(arr, (element) => element > 5);
		expect(result).toBe(false);
	});

	it("returns true for an empty array", () => {
		const arr: number[] = [];
		const result = DArray.every(arr, (element) => element > 0);
		expect(result).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe(
			[3, 12, 14],
			DArray.every((element) => element > 5),
		);
		expect(result).toBe(false);
	});
});
