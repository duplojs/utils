import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("cos", () => {
	it("computes the cosine of a value", () => {
		expect(DNumber.cos(0)).toBeCloseTo(1);
	});

	it("computes cosine through pipe", () => {
		const result = pipe(Math.PI / 2, DNumber.cos);
		expect(result).toBeCloseTo(0);
	});
});
