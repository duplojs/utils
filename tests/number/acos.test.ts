import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("acos", () => {
	it("computes the arccosine of a value", () => {
		expect(DNumber.acos(0)).toBeCloseTo(Math.PI / 2);
	});

	it("computes arccosine through pipe", () => {
		const result = pipe(1, DNumber.acos);
		expect(result).toBeCloseTo(0);
	});
});
