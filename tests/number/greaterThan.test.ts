import { pipe, DNumber } from "@scripts";

describe("greaterThan", () => {
	it("compare two numbers", () => {
		expect(DNumber.greaterThan(4, 5)).toBe(false);
	});

	it("compare two equals numbers", () => {
		expect(DNumber.greaterThan(4, 4)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			6,
			DNumber.greaterThan(8),
		);
		expect(result).toBe(false);
	});
});
