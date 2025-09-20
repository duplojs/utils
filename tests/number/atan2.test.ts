import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("atan2", () => {
	it("computes the arctangent from y and x", () => {
		expect(DNumber.atan2(1, 1)).toBeCloseTo(Math.PI / 4);
	});

	it("computes arctangent through pipe", () => {
		const result = pipe(1, DNumber.atan2(0));
		expect(result).toBeCloseTo(Math.PI / 2);
	});
});
