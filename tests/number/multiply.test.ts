import { DNumber, pipe } from "@scripts";

describe("multiply", () => {
	it("multiplies two numbers", () => {
		expect(DNumber.multiply(4, 5)).toBe(20);
	});

	it("multiplies through pipe", () => {
		const result = pipe(4, DNumber.multiply(5));
		expect(result).toBe(20);
	});
});
