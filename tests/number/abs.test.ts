import { DNumber, pipe } from "@scripts";

describe("abs", () => {
	it("returns the absolute value", () => {
		expect(DNumber.abs(-7)).toBe(7);
	});

	it("returns the absolute value through pipe", () => {
		const result = pipe(-7, DNumber.abs);
		expect(result).toBe(7);
	});
});
