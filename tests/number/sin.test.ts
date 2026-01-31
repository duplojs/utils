import { DNumber, pipe } from "@scripts";

describe("sin", () => {
	it("computes the sine of a value", () => {
		expect(DNumber.sin(Math.PI / 2)).toBeCloseTo(1);
	});

	it("computes sine through pipe", () => {
		const result = pipe(Math.PI, DNumber.sin);
		expect(result).toBeCloseTo(0);
	});
});
