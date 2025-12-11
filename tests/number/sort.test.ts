import { DNumber, pipe } from "@scripts";

describe("sort array number", () => {
	it("sorts numbers ascending by default", () => {
		expect(DNumber.sort([3, 1, 4, 2], "asc")).toEqual([1, 2, 3, 4]);
	});

	it("sorts numbers descending", () => {
		expect(DNumber.sort([3, 1, 4, 2], "dsc")).toEqual([4, 3, 2, 1]);
	});

	it("works with pipe (curried)", () => {
		const arr = [3, 1, 4, 2];
		const result = pipe(arr, DNumber.sort("asc"));
		expect(result).toEqual([1, 2, 3, 4]);
	});
});
