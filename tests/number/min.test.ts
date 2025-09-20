import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("min", () => {
	it("returns the minimum of two numbers", () => {
		expect(DNumber.min(4, 7)).toBe(4);
	});

	it("returns the minimum through pipe", () => {
		const result = pipe(7, DNumber.min(4));
		expect(result).toBe(4);
	});
});
