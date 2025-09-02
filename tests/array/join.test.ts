import { pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("join", () => {
	it("joins array with default separator", () => {
		expect(DArray.join([1, 2, 3])).toBe("1,2,3");
	});

	it("joins array with custom separator", () => {
		expect(DArray.join([1, 2, 3], "-")).toBe("1-2-3");
	});

	it("joins array using pipe with separotor", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.join("-"),
		);
		expect(result).toBe("1-2-3");
	});

	it("joins array using pipe (without separator)", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.join(),
		);
		expect(result).toBe("1,2,3");
	});
});
