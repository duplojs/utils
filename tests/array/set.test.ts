import { DArray, pipe } from "@scripts";

describe("set", () => {
	it("should set value at positive index", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = DArray.set(arr, 2, 99);
		expect(result).toEqual([1, 2, 99, 4, 5]);
	});

	it("should set value at negative index", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = DArray.set(arr, -1, 99);
		expect(result).toEqual([1, 2, 3, 4, 99]);
	});

	it("should set value at index greater than length", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = DArray.set(arr, 7, 99);
		expect(result).toEqual([1, 2, 99, 4, 5]);
	});

	it("should set value at index less than negative length", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = DArray.set(arr, -8, 99);
		expect(result).toEqual([1, 2, 99, 4, 5]);
	});

	it("should work in pipe", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = pipe(
			arr,
			DArray.reverse,
			DArray.set(1, 42),
			DArray.sort((first, second) => first - second),
		);
		expect(result).toEqual([1, 2, 3, 5, 42]);
	});
});
