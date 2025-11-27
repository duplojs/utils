import { DArray, pipe } from "@scripts";

describe("fill", () => {
	it("replaces with array value", () => {
		const arr = [1, 2, 3];
		const result = DArray.fill(arr, 4, 0, 1);
		expect(result).toEqual([4, 2, 3]);
	});

	it("replaces elements from start to end index with 0", () => {
		const arr = [1, 2, 3, 4];
		const result = DArray.fill(arr, 0, 1, 3);
		expect(result).toEqual([1, 0, 0, 4]);
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.map((value) => value + 1),
			DArray.push(5),
			DArray.unshift(1),
			DArray.fill(0, 1, 3),
		);
		expect(result).toEqual([1, 0, 0, 4, 5]);
	});
});
