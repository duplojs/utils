import { DNumber, pipe } from "@scripts";

describe("atan", () => {
	it("computes the arctangent of a value", () => {
		expect(DNumber.atan(1)).toBeCloseTo(Math.PI / 4);
	});

	it("computes arctangent through pipe", () => {
		const result = pipe(0, DNumber.atan);
		expect(result).toBeCloseTo(0);
	});
});
