import { DArray, DString, innerPipe, pipe } from "@scripts";

describe("findLastIndex", () => {
	const arr = [1, 2, 3, 4, 5, 3];

	it("should find the index of the last element matching the predicate (normal usage)", () => {
		const index = DArray.findLastIndex(arr, (element) => element === 3);
		expect(index).toBe(5);
	});

	it("should return undefined if no element matches the predicate (normal usage)", () => {
		const index = DArray.findLastIndex(arr, (element) => element === 10);
		expect(index).toBeUndefined();
	});

	it("should pass index param to predicate", () => {
		const index = DArray.findLastIndex(arr, (element, { index }) => index === 3 && element === 4);
		expect(index).toBe(3);
	});

	it("works with pipe (curried)", () => {
		const index = pipe(
			arr,
			DArray.findLastIndex((element) => element < 5),
		);
		expect(index).toBe(5);
	});

	it("works with complex pipe", () => {
		const prices = ["10.50", "25.99", "10.50", "33.00"] as const;

		const result = pipe(
			prices,
			DArray.findLastIndex(
				innerPipe(
					DString.toLowerCase,
					DString.startsWith("10"),
				),
			),
		);

		expect(result).toBe(2);
	});
});
