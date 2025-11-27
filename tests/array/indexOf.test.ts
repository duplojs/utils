import { DArray, pipe } from "@scripts";

describe("indexOf", () => {
	it("must not be in array", () => {
		const arr = ["cat", "apple", "car", "baguette"] as const;
		const result = DArray.indexOf(arr, "wines");
		expect(result).toBeUndefined();
	});

	it("must be in array with fromIndex option", () => {
		const arr = [1, 2, 3, 4, 2, 3, 4, 2];
		const result = DArray.indexOf(arr, 2, 2);
		expect(result).toEqual(4);
	});

	it("fromIndex negative", () => {
		const arr = [1, 2, 3, 4, 2, 3, 4, 2];
		const result = DArray.indexOf(arr, 2, -2);
		expect(result).toEqual(7);
	});

	it("fromIndex = 0", () => {
		const arr = [1, 2, 3, 4, 2];
		const result = DArray.indexOf(arr, 2, 0);
		expect(result).toEqual(1);
	});

	it("fromIndex negative out of range", () => {
		const arr = [1, 2, 3, 4, 2];
		const result = DArray.indexOf(arr, 2, -10);
		expect(result).toEqual(1);
	});

	it("fromIndex out of range", () => {
		const arr = [1, 2, 3, 4, 2];
		const result = DArray.indexOf(arr, 2, 10);
		expect(result).toEqual(4);
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3, 4, 2],
			DArray.indexOf(2),
		);
		expect(result).toEqual(1);
	});
});
