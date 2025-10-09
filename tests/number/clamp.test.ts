import { pipe } from "@scripts/common";
import { DNumber } from "@scripts";

describe("clamp", () => {
	it("clamps a number inside bounds", () => {
		expect(DNumber.clamp(10, 0, 5)).toBe(5);
	});

	it("clamps through pipe", () => {
		const result = pipe(-2, DNumber.clamp(0, 5));
		expect(result).toBe(0);
	});

	it("accepts inverted bounds", () => {
		const result = DNumber.clamp(3, 5, 0);
		expect(result).toBe(3);
	});
});
