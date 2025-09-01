import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("toString", () => {
	it("should convert array to string in normal mode", () => {
		expect(DArray.toString([1, 2, 3])).toBe("1,2,3");
		expect(DArray.toString(["a", "b", "c"])).toBe("a,b,c");
		expect(DArray.toString([])).toBe("");
		expect(DArray.toString([true, false])).toBe("true,false");
	});

	it("works with pipe (curried)", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.toString(),
		);
		expect(result).toBe("1,2,3");
	});
});
