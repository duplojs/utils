import { DString, pipe } from "@scripts";

describe("sort string array", () => {
	it("sorts strings ascending by default", () => {
		expect(DString.sort(["c", "a", "b"], "asc")).toEqual(["a", "b", "c"]);
	});

	it("sorts strings descending", () => {
		expect(DString.sort(["c", "a", "b"], "dsc")).toEqual(["c", "b", "a"]);
	});

	it("sorts strings descending with duplicates", () => {
		const arr = ["a", "b", "b"];
		expect(DString.sort(arr, "dsc")).toEqual(["b", "b", "a"]);
	});

	it("works with pipe (curried)", () => {
		const arr = ["c", "a", "b"];
		const result = pipe(arr, DString.sort("asc"));
		expect(result).toEqual(["a", "b", "c"]);
	});
});
