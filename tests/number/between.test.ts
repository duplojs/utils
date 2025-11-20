import { pipe, DNumber } from "@scripts";

describe("between", () => {
	it("should return true when value is within range", () => {
		expect(DNumber.between(1, -4, 5)).toBe(true);
	});

	it("should return false when value is outside range", () => {
		expect(DNumber.between(10, -4, 5)).toBe(false);
	});

	it("should return true when value equals upper bound", () => {
		expect(DNumber.between(5, -4, 5)).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe(
			6,
			DNumber.between(3, 4),
		);
		expect(result).toBe(false);
	});
});
