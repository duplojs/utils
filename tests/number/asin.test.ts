import { DNumber, pipe } from "@scripts";

describe("asin", () => {
	it("computes the arcsine of a value", () => {
		expect(DNumber.asin(1)).toBeCloseTo(Math.PI / 2);
	});

	it("computes arcsine through pipe", () => {
		const result = pipe(0, DNumber.asin);
		expect(result).toBeCloseTo(0);
	});
});
