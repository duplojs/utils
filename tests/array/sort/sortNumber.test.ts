import { DArray, pipe } from "@scripts/index";

describe("sortNumber", () => {
	it("sorts numbers ascending by default", () => {
		expect(DArray.sortNumber([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
	});

	it("sorts numbers descending", () => {
		expect(DArray.sortNumber([3, 1, 4, 2], "dsc")).toEqual([4, 3, 2, 1]);
	});

	it("works with pipe (curried)", () => {
		const arr = [3, 1, 4, 2];
		const result = pipe(arr, DArray.sortNumber());
		expect(result).toEqual([1, 2, 3, 4]);
	});
});
