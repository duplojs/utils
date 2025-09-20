import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("negate", () => {
	it("negates a number", () => {
		expect(DNumber.negate(5)).toBe(-5);
	});

	it("negates through pipe", () => {
		const result = pipe(5, DNumber.negate);
		expect(result).toBe(-5);
	});
});
