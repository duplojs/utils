import { pipe, DNumber } from "@scripts";

describe("betweenThan", () => {
	it("should return true when value is strictly between bounds", () => {
		expect(DNumber.betweenThan(1, -4, 5)).toBe(true);
	});

	it("should return false when value exceeds upper bound", () => {
		expect(DNumber.betweenThan(10, -4, 5)).toBe(false);
	});

	it("should return false when value equals upper bound", () => {
		expect(DNumber.betweenThan(5, -4, 5)).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			6,
			DNumber.betweenThan(3, 4),
		);
		expect(result).toBe(false);
	});
});
