import { DNumber, pipe } from "@scripts";

describe("sqrt", () => {
	it("computes the square root of a value", () => {
		expect(DNumber.sqrt(16)).toBe(4);
	});

	it("computes square root through pipe", () => {
		const result = pipe(25, DNumber.sqrt);
		expect(result).toBe(5);
	});

	it("handles decimal results", () => {
		expect(DNumber.sqrt(2)).toBeCloseTo(1.414213);
	});

	it("handles zero", () => {
		expect(DNumber.sqrt(0)).toBe(0);
	});
});
