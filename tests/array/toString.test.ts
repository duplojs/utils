import { pipe } from "@scripts/common";
import { toString } from "@scripts/array";

describe("toString", () => {
	it("should convert array to string in normal mode", () => {
		expect(toString([1, 2, 3])).toBe("1,2,3");
		expect(toString(["a", "b", "c"])).toBe("a,b,c");
		expect(toString([])).toBe("");
		expect(toString([true, false])).toBe("true,false");
	});

	it("works with pipe (curried)", () => {
		const result = pipe(
			[1, 2, 3],
			toString(),
		);
		expect(result).toBe("1,2,3");
	});
});
