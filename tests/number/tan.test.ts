import { DNumber, pipe } from "@scripts";

describe("tan", () => {
	it("computes the tangent of a value", () => {
		expect(DNumber.tan(Math.PI / 4)).toBeCloseTo(1);
	});

	it("computes tangent through pipe", () => {
		const result = pipe(0, DNumber.tan);
		expect(result).toBeCloseTo(0);
	});
});
