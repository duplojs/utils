import { DArray, pipe } from "@scripts";

describe("sortString", () => {
	it("sorts strings ascending by default", () => {
		expect(DArray.sortString(["c", "a", "b"], "asc")).toEqual(["a", "b", "c"]);
	});

	it("sorts strings descending", () => {
		expect(DArray.sortString(["c", "a", "b"], "dsc")).toEqual(["c", "b", "a"]);
	});

	it("sorts strings descending with duplicates", () => {
		const arr = ["a", "b", "b"];
		expect(DArray.sortString(arr, "dsc")).toEqual(["b", "b", "a"]);
	});

	it("works with pipe (curried)", () => {
		const arr = ["c", "a", "b"];
		const result = pipe(arr, DArray.sortString("asc"));
		expect(result).toEqual(["a", "b", "c"]);
	});
});
