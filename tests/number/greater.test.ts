import { pipe, DNumber } from "@scripts";

describe("greater", () => {
	it("compare two numbers", () => {
		expect(DNumber.greater(4, 5)).toBe(false);
	});

	it("compare two equals numbers", () => {
		expect(DNumber.greater(4, 4)).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe(
			6,
			DNumber.greater(8),
		);
		expect(result).toBe(false);
	});
});
