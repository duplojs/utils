import { DString, pipe } from "@scripts";

describe("sort string array", () => {
	it("sorts strings ascending by default", () => {
		expect(DString.sort(["c", "a", "b"], "ASC")).toEqual(["a", "b", "c"]);
	});

	it("sorts strings descending", () => {
		expect(DString.sort(["c", "a", "b"], "DSC")).toEqual(["c", "b", "a"]);
	});

	it("sorts strings descending with duplicates", () => {
		const arr = ["a", "b", "b"];
		expect(DString.sort(arr, "DSC")).toEqual(["b", "b", "a"]);
	});

	it("works with pipe (curried)", () => {
		const arr = ["c", "a", "b"];
		const result = pipe(arr, DString.sort("ASC"));
		expect(result).toEqual(["a", "b", "c"]);
	});
});
