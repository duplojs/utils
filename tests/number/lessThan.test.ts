import { pipe, DNumber } from "@scripts";

describe("lessThan", () => {
	it("compare two numbers", () => {
		expect(DNumber.lessThan(4, 5)).toBe(true);
	});

	it("compare two equals numbers", () => {
		expect(DNumber.lessThan(4, 4)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			6,
			DNumber.lessThan(8),
		);
		expect(result).toBe(true);
	});
});
