import { pipe, DNumber } from "@scripts";

describe("less", () => {
	it("compare two numbers", () => {
		expect(DNumber.less(4, 5)).toBe(true);
	});

	it("compare two equals numbers", () => {
		expect(DNumber.less(4, 4)).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe(
			6,
			DNumber.less(8),
		);
		expect(result).toBe(true);
	});
});
