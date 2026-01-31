import { DNumber, pipe } from "@scripts";

describe("min", () => {
	it("returns the minimum of two numbers", () => {
		expect(DNumber.min([4, 7])).toBe(4);
	});

	it("returns the minimum through pipe", () => {
		const result = pipe([4, 7] as const, DNumber.min);
		expect(result).toBe(4);
	});
});
